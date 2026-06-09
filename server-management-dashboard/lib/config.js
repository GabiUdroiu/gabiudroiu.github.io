export const config = {
  app: {
    name: process.env.APP_NAME || 'Server Management Dashboard',
    version: process.env.APP_VERSION || '0.1.0',
    env: process.env.APP_ENV || 'development',
    isDev: process.env.APP_ENV === 'development',
    isProd: process.env.APP_ENV === 'production',
  },
  api: {
    url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    timeout: parseInt(process.env.API_TIMEOUT || '30000'),
    rateLimit: parseInt(process.env.API_RATE_LIMIT || '100'),
  },
  database: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017',
    name: process.env.DATABASE_NAME || 'server_management',
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
}
