//var dbConnection = require('../../config/dbConnection');

module.exports = function (app) {
    
    app.get('/noticias', function (req, res) {
        
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function (erro, resultado) {
            res.render("noticias/noticias" , {noticias : resultado});
        });
    });

    //recupera a pagina
    app.get('/noticia', function (req, res) {
        //faz a conexao com o banco
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);


        noticiasModel.getNoticia(function (erro, resultado) {
            res.render("noticias/noticia" , {noticia : resultado});
        }); 
    });

};

