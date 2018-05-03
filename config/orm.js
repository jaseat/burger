const connection = require('./connection');

const orm = {
    selectAll: function(tableName){
        return new Promise((resolve, reject) => {
            console.log(connection.query('select * from ??', [tableName], (err, data) => {
                if(err) return reject(err);
                resolve(data);
            }).sql);
        });
    },
    insertOne: function(tableName, col, data){
        return new Promise((resolve, reject) => {
            console.log(connection.query('insert into ?? (??) values (?)', [tableName, col, data], (err, data) => {
                if(err) return reject(err);
                resolve({
                    id: data.insertId,
                    burger_name: data,
                    devoured: 0
                });
            }).sql);
        });
    },
    updateOne: function(tableName, col, where, data){
        return new Promise((resolve, reject) => {
            console.log(connection.query('update ?? set ?? = ? where ?? = ?', [tableName, col, data, where.col, where.val,], (err, data, fields) => {
                if(err) return reject(err);  
                connection.query('select * from ?? where ?? = ?', [tableName, where.col, where.val,], (err, data) => {
                    if(err) return reject(err);  
                    resolve(data[0]);
                })     
            }).sql);
        });
    },
};

module.exports = orm;