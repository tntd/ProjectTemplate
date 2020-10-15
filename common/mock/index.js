
const delay = require('mocker-api/utils/delay');
const { success } = require('./utils');
const bridgeApi = require('./bridgeApi');
const project = require('./project');
const policySets = require('./policySets');

const apiPrefix = '/tnt_cli_identifyApi';

const proxy = {
    ...bridgeApi
};

const requests = {
    'GET /apps': (req, res) => res.send(
        success(
            new Array(16).fill({
                name: '应用', key: 'app'
            }).map(({ name, key }, index) => ({
                name: `${name}-${index}`,
                key: `${key}-${index}`
            }))
        )
    ),
	...project,
	...policySets
};

Object.keys(requests).forEach(key => {
	const newKey = key.replace(' ', ` ${apiPrefix}`);
	proxy[newKey] = requests[key];
});

module.exports = delay(proxy, 10);
