const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



const paths = {
	dist: path.resolve('dist'),
	index: path.resolve('src', 'index'),
}


module.exports = {
	entry:  {
		index: paths.index,
	},
	output: {
		path: paths.dist,
	},
	mode: process.env.NODE_ENV,
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'@': path.resolve('src'),
		}
	},
	devServer: {
		contentBase: paths.dist,
		open: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'FP patterns',
		})
	]
}