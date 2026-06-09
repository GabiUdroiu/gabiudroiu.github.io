import { apiClient } from '@/lib/api-client'
import { API_ENDPOINTS } from '@/lib/constants'
import { logger } from '@/lib/logger'
import { ValidationError } from '@/lib/errors'

class ReportService {
  async getAll(params = {}) {
    try {
      logger.debug('Fetching all reports', params)
      const query = new URLSearchParams(params).toString()
      const url = query ? `${API_ENDPOINTS.REPORTS}?${query}` : API_ENDPOINTS.REPORTS
      return await apiClient.get(url)
    } catch (error) {
      logger.error('Failed to fetch reports', error)
      throw error
    }
  }

  async getById(id) {
    if (!id) {
      throw new ValidationError('Report ID is required')
    }
    try {
      logger.debug('Fetching report', { id })
      return await apiClient.get(`${API_ENDPOINTS.REPORTS}/${id}`)
    } catch (error) {
      logger.error('Failed to fetch report', error, { id })
      throw error
    }
  }

  async generate(type, params = {}) {
    if (!type) {
      throw new ValidationError('Report type is required')
    }
    try {
      logger.info('Generating report', { type, params })
      return await apiClient.post(`${API_ENDPOINTS.REPORTS}/generate`, { type, ...params })
    } catch (error) {
      logger.error('Failed to generate report', error, { type })
      throw error
    }
  }

  async export(id, format = 'pdf') {
    if (!id) {
      throw new ValidationError('Report ID is required')
    }
    try {
      logger.info('Exporting report', { id, format })
      return await apiClient.get(`${API_ENDPOINTS.REPORTS}/${id}/export?format=${format}`)
    } catch (error) {
      logger.error('Failed to export report', error, { id, format })
      throw error
    }
  }

  async getUptime(serverId, period = '30d') {
    if (!serverId) {
      throw new ValidationError('Server ID is required')
    }
    try {
      logger.debug('Fetching uptime data', { serverId, period })
      return await apiClient.get(`${API_ENDPOINTS.REPORTS}/uptime/${serverId}?period=${period}`)
    } catch (error) {
      logger.error('Failed to fetch uptime data', error, { serverId })
      throw error
    }
  }

  async getResourceUsage(serverId, period = '7d') {
    if (!serverId) {
      throw new ValidationError('Server ID is required')
    }
    try {
      logger.debug('Fetching resource usage', { serverId, period })
      return await apiClient.get(`${API_ENDPOINTS.REPORTS}/usage/${serverId}?period=${period}`)
    } catch (error) {
      logger.error('Failed to fetch resource usage', error, { serverId })
      throw error
    }
  }

  async getIncidents(params = {}) {
    try {
      logger.debug('Fetching incidents', params)
      const query = new URLSearchParams(params).toString()
      const url = query ? `${API_ENDPOINTS.REPORTS}/incidents?${query}` : `${API_ENDPOINTS.REPORTS}/incidents`
      return await apiClient.get(url)
    } catch (error) {
      logger.error('Failed to fetch incidents', error)
      throw error
    }
  }
}

export const reportService = new ReportService()
