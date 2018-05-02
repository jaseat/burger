const connection = require('./connection');

const orm = {
    selectAll: function(tableName){
        return new Promise((resolve, reject) => {
            connection.query('select * from ??', [tableName], (err, data) => {
                if(err) return reject(err);
                resolve(data);
            });
        });
    },
    insertOne: function(tableName, col, data){
        return new Promise((resolve, reject) => {
            connection.query('insert into ?? (??) values (?)', [tableName, col, data], (err, data) => {
                if(err) return reject(err);
                resolve(data);
            });
        });
    },
    updateOne: function(tableName, col, where, data){
        return new Promise((resolve, reject) => {
            connection.query('update ?? set ?? = ? where ?? = ?', [tableName, col, data, where.col, where.val], (err, data) => {
                if(err) return reject(err);
                resolve(data);
            });
        });
    },
};

module.exports = orm;