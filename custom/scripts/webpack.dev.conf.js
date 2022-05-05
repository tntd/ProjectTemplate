const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('./config');
const mockApis = require('../mock');
// const apiMocker = require("mocker-api");

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
		static: [
			path.join(__dirname, '../dist'),
			path.join(__dirname, '../public')
		],
		open: config.dev.autoOpenBrowser,
		proxy: config.dev.proxyTable || {},
		before: app => {
			if (process.env.MOCK) {
				for (const key in mockApis) {
					//   if (key.indexOf('partner') > -1) {
					app.get(`${key}`, mockApis[key]);
					app.post(`${key}`, mockApis[key]);
					//   }
				}
				console.log('mockApis...', mockApis);
				// apiMocker(app, mockApis);
			}
		},
		hot: true,
		historyApiFallback: true
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
			publicPath: config.dev.assetsPublicPath
		})
	],
	optimization: {
		minimize: false
	}
});
