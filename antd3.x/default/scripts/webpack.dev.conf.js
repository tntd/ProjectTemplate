const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const apiMocker = require('mocker-api');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('./config');

module.exports = merge(baseWebpackConfig, {
	mode: 'development',
	cache: true,
	output: {
		chunkFilename: 'js/[name].js',
		publicPath: config.dev.assetsPublicPath
	},
	devServer: {
		inline: true,
		host: config.dev.host,
		port: config.dev.port,
		contentBase: [path.join(__dirname, '../dist'), path.join(__dirname, '../public')],
		open: config.dev.autoOpenBrowser,
		proxy: config.dev.proxyTable || {},
		before: app => {
			if (process.env.MOCK) {
				apiMocker(app, path.resolve('./mock/index.js'));
			}
		},
		hot: true,
		historyApiFallback: true,
		disableHostCheck: true
	},
	devtool: config.dev.devtool,
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: config.common.htmlTemplatePath,	// 配置html模板的地址
			inject: true,
			chunksSortMode: 'none',
			dllPath: '/vendor',
			publicPath: config.dev.assetsPublicPath
		})
	],
	optimization: {
		minimize: false
	}
});
