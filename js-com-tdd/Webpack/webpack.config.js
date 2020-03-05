const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: './app.js',
    output: {
        filename: './build.js'
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
}