module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', { validacao: {}, dadosForm: {} })
}

module.exports.cadastrar = function (application, req, res) {

    var dadosForm = req.body;

    req.assert('nome', ' nome não pode ser vazio').notEmpty();
    req.assert('usuario', ' usuario não pode ser vazio').notEmpty();
    req.assert('senha', ' senha não pode ser vazio').notEmpty();
    req.assert('casa', ' casa não pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render('cadastro', { validacao: erros, dadosForm: dadosForm });
        return;
    }


    var connection = application.config.dbConnection;

    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
    var JogoDAO = new application.app.models.jogoDAO(connection);

    UsuariosDAO.inserirUsuario(dadosForm);
    JogoDAO.gerarParamentros(dadosForm.usuario);




    res.send('podemos cadastrar');
}