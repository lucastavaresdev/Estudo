/*Importar o modulo do framework express */
var express = require('express');

/*Importar o modulo do consign */
var consign = require('consign');

/*Importar o modulo do body-parser */
var bodyParser = require('body-parser');

/*Importar o modulo do express-validator */
var expressValidator = require('express-validator');


/*Iniciar o objeto express */
var app = express();


/*Setar as variaveis de 'view engine e views do express'*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*Configurar os middleware express.static*/
app.use(express.static('./app/public'));

/*configurar o middeware body-parser (recupera os submit do formulario em json se tiver o mesmo nome dos campos na tabela)*/
app.use(bodyParser.urlencoded({extended: true}))

/*configurar o body-parser express-validator*/
app.use(expressValidator());

/*efetua o autoload das rotas, dos modulos e dos controllers para o objeto app*/
consign()
.include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* exportar o objeto app */
module.exports = app;
