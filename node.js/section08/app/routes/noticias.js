//var dbConnection = require('../../config/dbConnection');

module.exports = function (app) {
    
    app.get('/noticias', function (req, res) {
        
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function (erro, resultado) {
            res.render("noticias/noticias" , {noticias : resultado});
        });
    });

};

