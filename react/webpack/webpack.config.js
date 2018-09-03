const webpack = require('webpack');

//o obj que e compilado
module.exports = {
    entry: '/ex/index.js', //ponto de entrada
    output: { //ponto de saida
        __dirname: string,
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public' // pasta onde o servidor ira ler
    }
}