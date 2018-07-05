module.exports = function(application){
    //post porque é submetido por um formulario
    application.post('/chat', function(req, res){
        //busca na pasta o aquivo ejs
        res.render('chat');
    });

    //post porque é submetido por um formulario
    //http://localhost:8001/chat
    application.get('/chat', function(req, res){
        //busca na pasta o aquivo ejs
        res.render('chat');
    });

}
