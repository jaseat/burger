const mysql      =  require('mysql');
const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'burgers_db'
});

connection.connect();

module.exports = connection;