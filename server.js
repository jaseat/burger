const express = require('express');
const app = express();
const logger = require('morgan');
const express_handlebars = require('express-handlebars');
const burger = require('./models/burger');

const port = process.env.PORT || 8080;

app.use(logger('tiny'));
app.engine('handlebars', express_handlebars({defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

require('./controllers/burgers_controller')(app);

app.get('/', (req, res) => {
    burger.findAll()
        .then(data => {
            res.render('index', {
            uneaten: data.filter(e => e.devoured == false),
            eaten: data.filter(e => e.devoured == true),
        })
    });
    // res.render('index');
})

app.listen(port, () => console.log('App listening on port ' + port));