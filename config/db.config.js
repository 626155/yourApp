require('dotenv').config();

module.exports = {
  HOST: process.env.DB_HOST || 'db4free.net',
  USER: process.env.DB_USER || 'yourapp',
  PASSWORD: process.env.DB_PASSWORD || 'admin@123',
  DB: process.env.DB_NAME || 'userdb',
  PORT: process.env.DB_PORT || '3306',
  dialect: 'mysql'
};