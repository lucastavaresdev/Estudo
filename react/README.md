# Curso de React e Redux

## Section: 1

Introdução
 --Apresentação do curso
 --Arquivos Iniciais para realização do curso
 --Configuração do ambiente de desenvolvimento.

## Section: 2

Webpack
 --O que é o webpack
 --configurando e instalando as depedencias

 ```
const webpack = require('webpack'); //modulo webpack
const ExtractTextPlugin = require('extract-text-webpack-plugin') // plugin para o css


        module.exports = {    //o obj que e compilado
            entry: './ex.5/index.js', //ponto de entrada
            output: { //ponto de saida
                path: __dirname + '/public',
                filename: './bundle.js'
            },
            devServer: { // servidor do webpack
                port: 8080,
                contentBase: './public' // pasta onde o servidor ira ler
            },
            plugins: [
                new ExtractTextPlugin('app.css')
            ],
            module: { // mudulo com as configurações do que fazer com os arq
                loaders: [{
                    test: /.js?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015', 'react'], //o que ira traduzir
                        plugins: ['transform-object-rest-spread']
                    }
                }, {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                }]
            }
        }
 ```