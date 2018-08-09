var express = require('express'),
    bodyParser = require('body-parser'),
    mongodb = require('mongodb');

var app = express();

//bosy-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var porta = 8080;

app.listen(porta);


console.log('Servidor Http esta escultando na porta' + porta);

app.get('/', function (req, res) {
    res.send({
        msg: 'Olá Mundo'
    })
})