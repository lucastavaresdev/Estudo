module.exports = function (app) {
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

