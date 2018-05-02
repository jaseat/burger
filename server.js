const express = require('express');
const app = express();
const logger = require('morgan');

const port = process.env.PORT || 8080;

app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));

require('./controllers/burgers_controller')(app);

app.listen(port, () => console.log('App listening on port ' + port));