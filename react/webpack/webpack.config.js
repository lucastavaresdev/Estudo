const webpack = require('webpack');

//o obj que e compilado
module.exports = {
    entry: './ex.4/index.js', //ponto de entrada
    output: { //ponto de saida
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public' // pasta onde o servidor ira ler
    },
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'], //o que ira traduzir
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}