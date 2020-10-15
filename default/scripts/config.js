const path = require('path');
const PORT = process.env.PORT || 8000;

module.exports = {
	common: {
		htmlTemplatePath: path.resolve(__dirname, '../src/index.html'),
		dllPath: path.resolve(__dirname, '../public/vendor')
	},
	dev: {
		hot: true,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			'/tnt_cli_identifyApi/partner': {
				'target': 'http://0.0.0:8200',
				'changeOrigin': true,
				// 'pathRewrite': {
				// 	'^/aaf': '/aaf'
				// }
			},
			'/tnt_cli_identifyApi': {
				// 'target': 'http://10.59.100.211:8088',
				'target': 'http://10.57.243.243:8099',
				'changeOrigin': true,
				'pathRewrite': {
					'^/aaf': '/aaf'
				}
			},
			'/mock': {
				'target': 'http://127.0.0.1:7001',
				'changeOrigin': true,
				'pathRewrite': {
					'^/mock': '/mock'
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
		assetsPublicPath: '/static-tnt_cli_identify/',
		devtool: 'source-map'
	}
};
