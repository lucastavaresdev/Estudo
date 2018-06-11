module.exports = function (app) {
//recupera a pagina
    app.get('/noticia', function (req, res) {
        //faz a conexao com o banco
        var connection = app.config.dbConnection();
        
        connection.query('select * from noticias where id_noticias = 2', function (erro, resultado) {
            res.render("noticias/noticia" , {noticia : resultado});
        });

    });
};

