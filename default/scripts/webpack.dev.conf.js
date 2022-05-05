const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const apiMocker = require('mocker-api');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('./config');
const resourcePrefix = config.common.resourcePrefix;

module.exports = merge(baseWebpackConfig, {
	mode: 'development',
	cache: true,
	output: {
		publicPath: config.dev.assetsPublicPath,
		filename: `${resourcePrefix}[name].js`,
		chunkFilename: `${resourcePrefix}[name].js`
	},
	devServer: {
		host: config.dev.host,
		port: config.dev.port,
		static: [path.join(__dirname, '../public')],
		open: config.dev.autoOpenBrowser,
		proxy: config.dev.proxyTable || {},
		onBeforeSetupMiddleware: function (devServer) {
			if (!devServer) {
				throw new Error('webpack-dev-server is not defined');
			}

			const { app } = devServer;
			if (process.env.MOCK) {
				apiMocker(app, path.resolve('./mock/index.js'));
			}

		},
		hot: true,
		historyApiFallback: true
	},
	devtool: config.dev.devtool,
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: config.common.htmlTemplatePath,	// 配置html模板的地址
			inject: true,
			chunksSortMode: 'none',
			// publicPath: config.dev.assetsPublicPath
			publicPath: `/${resourcePrefix}`
		})
	],
	optimization: {
		minimize: false,
		moduleIds: 'named'
	}
});
