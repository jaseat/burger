const orm = require('../config/orm');

const burger = {
    findAll: () => orm.selectAll('burgers'),
    insert: (data) => orm.insertOne('burgers', 'burger_name', data),
    update: (col, where, data) => orm.updateOne('burgers', col, where, data)
};

module.exports = burger;