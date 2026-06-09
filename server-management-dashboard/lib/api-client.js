import { config } from './config'
import { logger } from './logger'
import { AppError } from './errors'

const DEFAULT_TIMEOUT = config.api.timeout
const MAX_RETRIES = 3
const RETRY_DELAY = 1000

class APIClient {
  constructor(baseURL = config.api.url) {
    this.baseURL = baseURL
  }

  async request(endpoint, options = {}) {
    const {
      method = 'GET',
      body = null,
      headers = {},
      timeout = DEFAULT_TIMEOUT,
      retries = 0,
    } = options

    const url = `${this.baseURL}${endpoint}`
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    try {
      logger.debug(`API Request: ${method} ${url}`)

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        logger.warn(`API Error: ${method} ${url}`, {
          status: response.status,
          error: errorData,
        })

        throw new AppError(
          errorData.message || `HTTP ${response.status}`,
          response.status,
          errorData.code || 'API_ERROR'
        )
      }

      const data = await response.json()
      logger.debug(`API Response: ${method} ${url}`, { status: response.status })
      return data
    } catch (error) {
      clearTimeout(timeoutId)

      if (error instanceof AppError) {
        throw error
      }

      if (error.name === 'AbortError') {
        logger.error('Request timeout', error, { url, timeout })
        throw new AppError('Request timeout', 408, 'REQUEST_TIMEOUT')
      }

      if (retries < MAX_RETRIES) {
        logger.warn(`Retrying request`, { url, retries: retries + 1 })
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY))
        return this.request(endpoint, { ...options, retries: retries + 1 })
      }

      logger.error('API request failed', error, { url, retries })
      throw new AppError(error.message, 500, 'NETWORK_ERROR')
    }
  }

  get(endpoint, options) {
    return this.request(endpoint, { ...options, method: 'GET' })
  }

  post(endpoint, body, options) {
    return this.request(endpoint, { ...options, method: 'POST', body })
  }

  put(endpoint, body, options) {
    return this.request(endpoint, { ...options, method: 'PUT', body })
  }

  patch(endpoint, body, options) {
    return this.request(endpoint, { ...options, method: 'PATCH', body })
  }

  delete(endpoint, options) {
    return this.request(endpoint, { ...options, method: 'DELETE' })
  }
}

export const apiClient = new APIClient()
