/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar porta de escuta */
var server = app.listen(8001, function(){
    console.log('Servidor online');
})

require('socket.io').listen(server);