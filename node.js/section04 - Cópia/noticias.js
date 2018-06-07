var http = require('http');



var server = http.createServer(function (req, res) {
    var categoria = req.url;

    if (categoria == "/tecnologia") {
        res.end("<html><body>Porta de tech</body></html>");
    } else if (categoria == '/moda') {
        res.end("<html><body>Porta de moda</body></html>");
    } else {
        res.end("<html><body>Porta de Noticias</body></html>");
    }
});


server.listen(3000);

