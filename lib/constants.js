export const SERVER_STATUS = {
  ACTIVE: 'Active',
  MAINTENANCE: 'Maintenance',
  DECOMMISSIONED: 'Decommissioned',
  OFFLINE: 'Offline',
  ERROR: 'Error',
}

export const STATUS_COLORS = {
  Active: 'green',
  Maintenance: 'yellow',
  Decommissioned: 'gray',
  Offline: 'red',
  Error: 'red',
}

export const RESOURCE_THRESHOLDS = {
  CPU: {
    WARNING: 75,
    CRITICAL: 90,
  },
  MEMORY: {
    WARNING: 80,
    CRITICAL: 95,
  },
  STORAGE: {
    WARNING: 85,
    CRITICAL: 95,
  },
}

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
}

export const API_ENDPOINTS = {
  SERVERS: '/servers',
  REPORTS: '/reports',
  SETTINGS: '/settings',
}

export const CACHE_KEYS = {
  SERVERS_LIST: 'servers-list',
  SERVER_DETAIL: 'server-detail',
  REPORTS: 'reports',
  STATS: 'stats',
}

export const CACHE_TTL = {
  SHORT: 60 * 1000, // 1 minute
  MEDIUM: 5 * 60 * 1000, // 5 minutes
  LONG: 30 * 60 * 1000, // 30 minutes
}

export const MESSAGES = {
  SUCCESS: 'Operation completed successfully',
  ERROR: 'An error occurred. Please try again.',
  LOADING: 'Loading...',
  NO_DATA: 'No data available',
  CONFIRMATION: 'Are you sure?',
}
