import { config } from './config'

const LogLevel = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
}

const levelNames = {
  0: 'DEBUG',
  1: 'INFO',
  2: 'WARN',
  3: 'ERROR',
}

const levelColors = {
  0: '\x1b[36m', // cyan
  1: '\x1b[32m', // green
  2: '\x1b[33m', // yellow
  3: '\x1b[31m', // red
}

const reset = '\x1b[0m'

function getTimestamp() {
  return new Date().toISOString()
}

function formatLog(level, message, data = {}) {
  const timestamp = getTimestamp()
  const levelName = levelNames[level]
  const color = levelColors[level]

  const isDev = typeof window === 'undefined' && config.app.isDev

  if (isDev) {
    console.log(
      `${color}[${timestamp}] ${levelName}${reset} ${message}`,
      Object.keys(data).length > 0 ? data : ''
    )
  } else {
    // Production: structured logging
    console.log(JSON.stringify({
      timestamp,
      level: levelName,
      message,
      ...data,
    }))
  }
}

export const logger = {
  debug: (message, data) => {
    if (LogLevel[config.logging.level] <= LogLevel.DEBUG) {
      formatLog(LogLevel.DEBUG, message, data)
    }
  },

  info: (message, data) => {
    if (LogLevel[config.logging.level] <= LogLevel.INFO) {
      formatLog(LogLevel.INFO, message, data)
    }
  },

  warn: (message, data) => {
    if (LogLevel[config.logging.level] <= LogLevel.WARN) {
      formatLog(LogLevel.WARN, message, data)
    }
  },

  error: (message, error, data) => {
    if (LogLevel[config.logging.level] <= LogLevel.ERROR) {
      const errorData = {
        ...data,
        ...(error instanceof Error && {
          errorName: error.name,
          errorMessage: error.message,
          errorStack: config.app.isDev ? error.stack : undefined,
        }),
      }
      formatLog(LogLevel.ERROR, message, errorData)
    }
  },
}
