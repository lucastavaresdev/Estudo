var express = require('express');
var consign = require('consign');


var app = express();
app.set('view engine','ejs');
app.set('views', './app/views');

//reconhece todos  os arquivos da pasta e depois inclui no servidor
consign().include('./app/routes').into(app);

module.exports = app;