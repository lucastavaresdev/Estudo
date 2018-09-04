const webpack = require('webpack');

//o obj que e compilado
module.exports = {
    entry: './ex.1/index.js', //ponto de entrada
    output: { //ponto de saida
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public' // pasta onde o servidor ira ler
    }
}