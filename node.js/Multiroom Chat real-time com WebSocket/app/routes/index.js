module.exports = function(application){

    application.get('/', function(req, res){
        //busca na pasta o aquivo ejs
        application.app.controllers.index.home(application, req, res);
    });

}
