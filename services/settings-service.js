import { apiClient } from '@/lib/api-client'
import { API_ENDPOINTS } from '@/lib/constants'
import { logger } from '@/lib/logger'
import { ValidationError } from '@/lib/errors'

class SettingsService {
  async getSettings() {
    try {
      logger.debug('Fetching application settings')
      return await apiClient.get(API_ENDPOINTS.SETTINGS)
    } catch (error) {
      logger.error('Failed to fetch settings', error)
      throw error
    }
  }

  async updateSettings(data) {
    if (!data) {
      throw new ValidationError('Settings data is required')
    }
    try {
      logger.info('Updating settings')
      return await apiClient.put(API_ENDPOINTS.SETTINGS, data)
    } catch (error) {
      logger.error('Failed to update settings', error)
      throw error
    }
  }

  async getNotificationSettings() {
    try {
      logger.debug('Fetching notification settings')
      return await apiClient.get(`${API_ENDPOINTS.SETTINGS}/notifications`)
    } catch (error) {
      logger.error('Failed to fetch notification settings', error)
      throw error
    }
  }

  async updateNotificationSettings(data) {
    if (!data) {
      throw new ValidationError('Notification settings data is required')
    }
    try {
      logger.info('Updating notification settings')
      return await apiClient.put(`${API_ENDPOINTS.SETTINGS}/notifications`, data)
    } catch (error) {
      logger.error('Failed to update notification settings', error)
      throw error
    }
  }

  async getIntegrations() {
    try {
      logger.debug('Fetching integrations')
      return await apiClient.get(`${API_ENDPOINTS.SETTINGS}/integrations`)
    } catch (error) {
      logger.error('Failed to fetch integrations', error)
      throw error
    }
  }

  async testDatabaseConnection(config) {
    if (!config) {
      throw new ValidationError('Database config is required')
    }
    try {
      logger.info('Testing database connection')
      return await apiClient.post(`${API_ENDPOINTS.SETTINGS}/test-db`, config)
    } catch (error) {
      logger.error('Database connection test failed', error)
      throw error
    }
  }

  async getAuditLog(params = {}) {
    try {
      logger.debug('Fetching audit log', params)
      const query = new URLSearchParams(params).toString()
      const url = query ? `${API_ENDPOINTS.SETTINGS}/audit-log?${query}` : `${API_ENDPOINTS.SETTINGS}/audit-log`
      return await apiClient.get(url)
    } catch (error) {
      logger.error('Failed to fetch audit log', error)
      throw error
    }
  }
}

export const settingsService = new SettingsService()
