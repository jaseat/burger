const burger = require('../models/burger');

module.exports = app => {
    app.get('/api/burgers', (req, res) => {
        burger.findAll()
            .then(data => res.json(data));
    });

    app.post('/api/burgers', (req, res) => {
        burger.insert(req.body)
            .then(data => res.json(data))
            .catch(err => res.send(err));
    });

    app.put('/api/burgers/:id', (req, res) => {
        burger.update('devoured', {
            col: 'id',
            val: req.params.id
        }, req.body.devoured)
            .then(data => res.json(data))
            .catch(err => res.send(err));
    });
}