var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine','ejs');
app.set('views', './app/views');

//consign reconhece os modulos e dopois joga na instancia do servidor
consign()
    .include('app/routes')
    .then('config/dbConnection.js')//preciso apontar a extenção para nao achar que é subdiretorio
    .into(app)

module.exports = app;