const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const BranchPlugin = require('@tntd/webpack-branch-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyPlugin = require('copy-webpack-plugin');
const config = require('./config');

module.exports = merge(baseWebpackConfig, {
	mode: 'production',
	output: {
		chunkFilename: '[name].[chunkhash:8].js'
	},
	// devtool: 'source-map',
	optimization: {
		splitChunks: {
			chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.(css|less)(\?.*)?$/,
					chunks: 'all',
					enforce: true
				}
			}
		},
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false
			}),
			new OptimizeCSSAssetsPlugin({
				cssProcessor: {
					process: function(css) {
						return require('cssnano')
							.process(css, {
								/* options */
							})
							.then(function(cssnanoResult) {
								return require('autoprefixer').process(cssnanoResult); // Assuming mqpacker is similar to cssnano interface
							});
					},
					canPrint: false
				}
			})
		]
	},
	plugins: [
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-en|en-us/),
		new CleanWebpackPlugin(['*'], {
			root: path.resolve(__dirname, '../dist/'),
			verbose: true,
			dry: false
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: config.common.htmlTemplatePath,	// 配置html模板的地址
			chunksSortMode: 'none',
			publicPath: config.build.assetsPublicPath
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[chunkhash:8].css'
		}),
		new CopyPlugin([
			{
				from: 'public',
				to: ''
			}
        ]),
        new BranchPlugin({
            filename: 'branch_info.txt'
        })
		// new BundleAnalyzerPlugin()
	]
});
