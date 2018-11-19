const modoDev = process.env.Node_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin =  require('mini-css-extract-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require ('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new uglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: 
        [
            new MiniCssExtractPlugin({
                filename: "estilo.css"
            })
        ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: 
                    [
                        MiniCssExtractPlugin.loader,
                        // 'style-loader', //adiciona o css a dom injetando a tag style
                        'css-loader', // interpreta @import url()... etc
                        'sass-loader' ,
                    ]
            }, {
                test: /\.(png|svg|jpg|git)$/,
                use: ['file-loader']
            }
        ]
    }
}