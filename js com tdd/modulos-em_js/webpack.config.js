const path = require('path');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './app',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'assets/js')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	},
	plugins: [
		new UglifyJsPlugin({
			uglifyOptions: {
				compress: { warnings: false },
				output: { comments: false },
				sourceMap: true
			}
		}),
		new webpack.SourceMapDevToolPlugin({
			filename: 'app.js.map',
		})

	  ]
};