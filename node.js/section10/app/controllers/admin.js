module.exports.formulario_inclusao_noticia = function (app, req, res) {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function (app , req, res) {
    var noticia = req.body;
    //tratando as infomações
    //na requsição coloca o campo e a mensagem . tipo de validação
    req.assert('titulo', 'Titulo é obrigatorio').notEmpty();
    req.assert('resumo', 'Resumo é obrigatorio').notEmpty();
    req.assert('resumo', 'Resumo invalido colocar em 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatorio').notEmpty();
    req.assert('noticia', 'Noticia é obrigatorio').notEmpty();
    req.assert('data_noticia', 'Data é obrigatorio').notEmpty()
    req.assert('data_noticia', 'Data é obrigatorio').toDate({ format: 'YYYY-MM-DD' });


    var erros = req.validationErrors();

    if (erros) {
        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
        return;
    }

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, resultado) {
        res.redirect('/noticias');
    });
}