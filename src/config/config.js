require('dotenv').config();

const config = {
  // Server configuration
  server: {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
  },

  // Database configuration
  database: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },

  // API configuration
  api: {
    prefix: process.env.API_PREFIX || '/api',
    corsOrigin: process.env.CORS_ORIGIN || '*'
  },

  // Logging configuration
  logging: {
    level: process.env.LOG_LEVEL || 'info'
  },

  // Security configuration
  security: {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1d'
  }
};

module.exports = config; 