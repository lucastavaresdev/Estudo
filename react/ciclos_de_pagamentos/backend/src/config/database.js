const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/ciclos')


mongoose.Error.messages.general.required = " O atributo '{PATH}' é obrigatorio."  
