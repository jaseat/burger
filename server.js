require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const express_handlebars = require('express-handlebars');
const sass = require('node-sass-middleware');

const burger = require('./models/burger');

const app = express();
const port = process.env.PORT || 8080;

app.use(logger('tiny'));
app.engine('handlebars', express_handlebars({
    defaultLayout: "main",
    helpers: {
        inc: value => parseInt(value) + 1
    }
}));
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    sass({
        src: __dirname + '/sass',
        dest: __dirname + '/public/assets/css',
        debug: true,
        outputStyle: 'compressed',
        prefix: '/assets/css'
    })
);
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