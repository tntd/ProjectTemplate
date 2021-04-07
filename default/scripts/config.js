const path = require('path');
const PORT = process.env.PORT || 8000;
const resourcePrefix = '/tnt_cli_identify-resource/';

module.exports = {
	common: {
		htmlTemplatePath: path.resolve(__dirname, '../src/index.html'),
		dllPath: path.resolve(__dirname, '../public/vendor'),
		resourcePrefix
	},
	dev: {
		hot: true,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			'/bridgeApi': {
				'target': 'http://10.58.12.46:8090',
				'changeOrigin': true,
				'pathRewrite': {
					// "^/bridgeApi": "/api"
				}
			},
			'/tnt_cli_identifyApi': {
				'target': 'http://10.58.12.46:8090',
				'changeOrigin': true,
				'pathRewrite': {
					// '^/tnt_cli_identifyApi': '/api'
				}
			},
			'/tnt_cli_identify-resource': {
                target: `http://127.0.0.1:${PORT}`,
                pathRewrite: {
                    '^/tnt_cli_identify-resource': ''
                }
            }
		},
		host: '0.0.0.0',
		port: PORT,
		autoOpenBrowser: true,
		devtool: 'eval-source-map'
	},
	build: {
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: resourcePrefix,
		devtool: false
	}
};
