var dbConnection = require('../../config/dbConnection');

module.exports = function (app) {

    var connection = dbConnection();

    app.get('/noticias', function (req, res) {
   
        connection.query('select * from noticias', function (erro, resultado) {
            res.render("noticias/noticias" , {noticias : resultado});
        });

    });
};

