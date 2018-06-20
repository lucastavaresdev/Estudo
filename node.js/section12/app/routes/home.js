

module.exports = function (app, req, res) {

    app.get('/', function (req, res) {
        app.app.controllers.home.index(app, req, res);
    });

};