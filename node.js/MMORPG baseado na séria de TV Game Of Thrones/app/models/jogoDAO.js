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

JogoDAO.prototype.iniciaJogo = function (res, usuario, casa, msg) {
    var date = new Date();
    var momento_atual = date.getTime();

    var dados = {
        operacao: "buscar",
        usuario: { usuario: usuario, },
        collection: "jogo",
        callback: function (err, result) {
            result.toArray(function (err, result) {
                res.render('jogo', { img_casa: casa, jogo: result[0], msg: msg })
            })
        }
    }

    this._connection(dados);
}

JogoDAO.prototype.acao = function (acao) {
    var date = new Date();

    var tempo = null;

    switch (parseInt(acao.acao)) {
        case 1: tempo = 1 * 60 * 60000; break;
        case 2: tempo = 2 * 60 * 60000; break;
        case 3: tempo = 5 * 60 * 60000; break;
        case 4: tempo = 5 * 60 * 60000; break;
    }

    acao.acao_termina_em = date.getTime() + tempo;

    var dados = {
        operacao: "inserir",
        usuario: {
            usuario: acao.usuario,
            acao: acao.acao,
            quantidade: acao.quantidade,
            termina_em: acao.acao_termina_em,
        },
        collection: "acao",
        callback: function (err, result) {
        }
    }


    var moedas = null;

    switch (parseInt(acao.acao)) {
        case 1: moedas = -2 * acao.quantidade; break;
        case 2: moedas = -3 * acao.quantidade; break;
        case 3: moedas = -1 * acao.quantidade; break;
        case 4: moedas = -1 * acao.quantidade; break;
    }

    var update = {
        operacao: "update",
        usuario: (
            { usuario: acao.usuario },
            { $inc: { moeda: moedas } }
        ),
        collection: "jogo",
        callback: function (err, result) {
        }
    }

    this._connection(update);
    this._connection(dados);
}

JogoDAO.prototype.getAcoes = function (usuario, res) {
    var d = new Date();
    var momento_atual = d.getTime();

    var dados = {
        operacao: "buscar",
        usuario: { usuario: usuario, termina_em: { $gt: momento_atual } },
        collection: "acao",
        callback: function (err, result) {
            result.toArray(function (err, result) {
                console.log(result);
                res.render('pergaminhos', { acoes: result });
            })
        }
    }

    this._connection(dados);
}

module.exports = function () {
    return JogoDAO;
};
