const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

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
		})
	  ]
};