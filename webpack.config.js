const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const paths = {
	dist: path.resolve('dist'),
	index: path.resolve('src', 'index'),
	src: path.resolve('src'),
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
				use: 'ts-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'@': paths.src,
		}
	},
	devServer: {
		contentBase: paths.dist,
		open: true,
		openPage: 'conceptions',
		historyApiFallback: true,
		
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'FP',
		})
	]
}