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
            console.log('jogoDAO')
        }
    };
    this._connection(dados);
}

module.exports = function () {
    return JogoDAO;
};
