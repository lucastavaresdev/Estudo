var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine','ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));

//reconhece todos  os arquivos da pasta e depois inclui no servidor
consign()
    .include('./app/routes')
    .then('config/dbConnection.js')//tem que colocar .js
    .then('app/models')
    .into(app);

module.exports = app;