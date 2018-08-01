function JogoDAO(connection) {
    this._connection = connection;

}


JogoDAO.prototype.gerarParamentros = function (usuario) {
    var dados = {
        operacao: "inserir",
        usuario: {
            usuario: usuario,
            moeda: 15,
            suditos: 10,
            temor: Math.floor(Math.random() * 1000),
            sabedoria: Math.floor(Math.random() * 1000),
            comercio: Math.floor(Math.random() * 1000),
            magia: Math.floor(Math.random() * 1000)
        },
        collection: "jogo",
        callback: function (err, result) {
        }
    }
    this._connection(dados);
};

JogoDAO.prototype.iniciaJogo = function (res, usuario, casa) {
    var dados = {
        operacao: "buscar",
        usuario: { usuario: usuario },
        collection: "jogo",
        callback: function (err, result) {
            result.toArray(function (err, result) {
                res.render('jogo', { img_casa: casa, jogo: result[0] })
            })
        }
    }

    this._connection(dados);


}


module.exports = function () {
    return JogoDAO;
};
