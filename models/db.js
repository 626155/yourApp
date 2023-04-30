const mysql = require('mysql');
const dbConfig = require('../config/db.config');

function initializeDatabase() {
  const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port: dbConfig.PORT
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database!');
  });

  connection.on('error', (err) => {
    console.error('MySQL error:', err);
  });

  return connection;
}

const db = initializeDatabase();

module.exports = db;