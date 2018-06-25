var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var express_validador = require('express-validator');


var app = express();
app.set('view engine','ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));//busca todos os arquivos estaticos 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express_validador());


//reconhece todos  os arquivos da pasta e depois inclui no servidor
consign()
    .include('./app/routes')
    .then('config/dbConnection.js')//tem que colocar .js para nao achar que é diretorio
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;