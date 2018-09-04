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

## Section: 3

Configurando as depedencias para realizar os exercicios

 ```
npm i --save-dev react@15.4.2 react-dom@15.4.2 babel-core@6.22.1 babel-loader@6.2.10 babel-preset-es2015@6.22.0 babel-preset-react@6.22.0 webpack@1.14.0 webpack-dev-server@1.16.2

 ```

 -Configuração do webpack

 ```
 
 ```