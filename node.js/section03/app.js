var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/tecnologia',function(req, res){
    res.render("./secao/tecnologia");
});




app.get('/',function(req, res){
    res.send("<h1>Portal de Noticias</h1>")
});



app.listen(5000, function(){
    console.log("server rodando com express")
})