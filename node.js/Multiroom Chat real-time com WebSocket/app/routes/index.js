module.exports = function(application){

    application.get('/', function(req, res){
        //busca na pasta o aquivo ejs
        res.render('index');
    });

}
