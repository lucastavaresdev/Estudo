var app = require('./config/server.js');

var rotaNoticias = require('./app/routes/noticias')(app);

var rotaHome = require('./app/routes/home')(app);

var rotaFormulario = require('./app/routes/formulario_inclusao_noticia')(app);


app.listen(5000, function(){
    console.log("server rodando com express")
})

