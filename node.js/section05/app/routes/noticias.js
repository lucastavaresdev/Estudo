module.exports = function (app) {

    app.get('/noticias', function (req, res) {
        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'noticias'
        });

        connection.query('select * from noticias', function (erro, resultado) {
            res.render("noticias/noticias" , {noticias : resultado});
        });

    });
};

