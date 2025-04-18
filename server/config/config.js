require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/hotel_management',
  JWT_SECRET: process.env.JWT_SECRET || '123456',
  NODE_ENV: process.env.NODE_ENV || 'development'
};