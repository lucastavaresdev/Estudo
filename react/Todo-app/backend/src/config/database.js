const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //retira msg de advertencia
module.exports = mongoose.connect('mongodb://localhost/todo');