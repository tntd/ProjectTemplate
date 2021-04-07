const path = require('path');
const webpack = require('webpack');
const config = require('./config');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const outpath = '../public/vendor';

const vendors = [
	// 'core-js',
	'dva',
	'react',
	'react-dom',
	'react-router',
	'react-redux'
];

module.exports = {
	mode: 'production',
	entry: {
		vendor: vendors
	},
	output: {
		path: path.resolve(__dirname, outpath),
		filename: '[name].js',
		library: '[name]_library',
		libraryTarget: 'window'
	},
	plugins: [
		new webpack.DllPlugin({
			name: '[name]_library',
			path: path.resolve(__dirname, outpath, 'vendor_manifest.json'),
			context: __dirname
		})
		// new BundleAnalyzerPlugin({
		// 	analyzerMode: 'static'
		// })
	],
	devtool: false
};
