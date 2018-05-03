const mysql      =  require('mysql');
const connection =  mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PASS,
    database: 'burgers_db'
});

connection.connect();

module.exports = connection;