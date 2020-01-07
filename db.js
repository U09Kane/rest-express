const Sequelize = require('sequelize');


// Get connection params from env variables
const {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASS,
} = process.env;

// Create database instance
const db = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASS,
  { dialect: 'mariadb', host: DB_HOST },
);

module.exports = db;
