import { apiClient } from '@/lib/api-client'
import { API_ENDPOINTS } from '@/lib/constants'
import { logger } from '@/lib/logger'
import { NotFoundError, ValidationError } from '@/lib/errors'

class ServerService {
  async getAll(params = {}) {
    try {
      logger.debug('Fetching all servers', params)
      const query = new URLSearchParams(params).toString()
      const url = query ? `${API_ENDPOINTS.SERVERS}?${query}` : API_ENDPOINTS.SERVERS
      return await apiClient.get(url)
    } catch (error) {
      logger.error('Failed to fetch servers', error)
      throw error
    }
  }

  async getById(id) {
    if (!id) {
      throw new ValidationError('Server ID is required')
    }
    try {
      logger.debug('Fetching server', { id })
      return await apiClient.get(`${API_ENDPOINTS.SERVERS}/${id}`)
    } catch (error) {
      logger.error('Failed to fetch server', error, { id })
      throw error
    }
  }

  async create(data) {
    if (!data || !data.name) {
      throw new ValidationError('Server name is required')
    }
    try {
      logger.info('Creating server', { name: data.name })
      return await apiClient.post(API_ENDPOINTS.SERVERS, data)
    } catch (error) {
      logger.error('Failed to create server', error, { name: data.name })
      throw error
    }
  }

  async update(id, data) {
    if (!id) {
      throw new ValidationError('Server ID is required')
    }
    try {
      logger.info('Updating server', { id })
      return await apiClient.put(`${API_ENDPOINTS.SERVERS}/${id}`, data)
    } catch (error) {
      logger.error('Failed to update server', error, { id })
      throw error
    }
  }

  async delete(id) {
    if (!id) {
      throw new ValidationError('Server ID is required')
    }
    try {
      logger.info('Deleting server', { id })
      return await apiClient.delete(`${API_ENDPOINTS.SERVERS}/${id}`)
    } catch (error) {
      logger.error('Failed to delete server', error, { id })
      throw error
    }
  }

  async search(query) {
    if (!query) {
      throw new ValidationError('Search query is required')
    }
    try {
      logger.debug('Searching servers', { query })
      return await apiClient.get(`${API_ENDPOINTS.SERVERS}/search?q=${encodeURIComponent(query)}`)
    } catch (error) {
      logger.error('Search failed', error, { query })
      throw error
    }
  }

  async getStats() {
    try {
      logger.debug('Fetching server statistics')
      return await apiClient.get(`${API_ENDPOINTS.SERVERS}/stats`)
    } catch (error) {
      logger.error('Failed to fetch stats', error)
      throw error
    }
  }

  async healthCheck(id) {
    if (!id) {
      throw new ValidationError('Server ID is required')
    }
    try {
      logger.debug('Running health check', { id })
      return await apiClient.post(`${API_ENDPOINTS.SERVERS}/${id}/health-check`)
    } catch (error) {
      logger.error('Health check failed', error, { id })
      throw error
    }
  }
}

export const serverService = new ServerService()
