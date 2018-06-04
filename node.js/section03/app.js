var express = require('express');
var app = express();

app.get('/',function(req, res){
    res.send("<h1>Portal de Noticias</h1>")
});
app.get('/tecnologia',function(req, res){
    res.send("<h1>Portal de tecnolofia</h1>")
});


app.listen(2000, function(){
    console.log("server rodando com express")
})