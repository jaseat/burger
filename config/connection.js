const mysql      =  require('mysql');
const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASS,
    database: 'burgers_db'
});

connection.connect();

module.exports = connection;