module.exports.cadastro = function(application, req, res){
    res.render('cadastro')
}

module.exports.cadastrar = function(application, req, res){
   
    var dadosForm = req.body;

    req.assert('nome', 'não pode ser vazio').notEmpty();
    req.assert('usuario', 'não pode ser vazio').notEmpty();
    req.assert('senha', 'não pode ser vazio').notEmpty();
    req.assert('casa', 'não pode ser vazio').notEmpty();

    var erros =  req.validationErrors();

    if(erros){
        res.send('exitem erros no formulario');
    }
    res.send('podemos cadastrar');
}