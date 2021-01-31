require('./db/db');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
var app = express();
var morgan = require('morgan')
var cors = require('cors')
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());
app.use(cors());
app.use(morgan('dev'));

const Hackathon = require('./controllers/Hackathon.controlers');
//Definition des routes

app.use('/api',Hackathon);



//Port d'ecoute
app.listen(8080, () => {
    console.log('SDI Server Start on: 8080');
});