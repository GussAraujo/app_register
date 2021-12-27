const mysql = require('mysql');

const pool = mysql.createPool({
  host: "localhost",
  user: "araujo",
  password: "yasaraujo1502",
  database: "db_login"
});

exports.pool = pool;