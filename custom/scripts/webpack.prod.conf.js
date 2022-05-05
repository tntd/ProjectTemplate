const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BranchPlugin = require('@tntd/webpack-branch-plugin');
// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('./config');

module.exports = merge(baseWebpackConfig, {
	mode: 'production',
	output: {
		chunkFilename: '[name].[chunkhash:8].js',
		publicPath: config.build.assetsPublicPath
	},
	// devtool: 'source-map',
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(),
			new CssMinimizerPlugin()
		]
	},
	plugins: [
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-en|en-us/),
		new CleanWebpackPlugin({
			root: path.resolve(__dirname, '../dist/'),
			// verbose: true,
			dry: false
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.join(__dirname, '../public'),
					to: config.build.assetsRoot
				}
			]
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, '../src/index.html'),
			chunksSortMode: 'none'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[id].css',
			ignoreOrder: true
		}),
		new BranchPlugin({
			filename: 'branch_info.txt'
		})
		// new BundleAnalyzerPlugin(),
	]
});
