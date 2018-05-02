const orm = require('../config/orm');

const burger = {
    findAll: () => orm.selectAll('burgers'),
    insert: (data) => {
        if(typeof data !== 'string')
            return new Promise((res, rej) => rej('Invalid Name'));
        return orm.insertOne('burgers', 'burger_name', data)
    },
    update: (col, where, data) => {
        if(isNaN(where.val))
            return new Promise((res, rej) => rej('Invalid ID'));
        if(data !== 0 || data !== 1)
            return new Promise((res, rej) => rej('Invalid data'));
        return orm.updateOne('burgers', col, where, data)
    }
};

module.exports = burger;