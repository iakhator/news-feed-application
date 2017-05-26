const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{ test: /\.(jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
			{ test: /\.(js)$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] },
			{ test: /\.(scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'src/index.html'
	})]
};
