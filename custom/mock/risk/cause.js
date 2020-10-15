const { success } = require('../utils');

module.exports = (req, res) => {
    res.send(success({
		"datas": [{
			"name": "风险原因1",
			"value": 4676640
		}, {
			"name": "风险原因1",
			"value": 350276
		}, {
			"name": "风险原因1",
			"value": 297000
		}, {
			"name": "风险原因1",
			"value": 219331
		}, {
			"name": "风险原因1",
			"value": 212276
		}, {
			"name": "风险原因1",
			"value": 81900
		}, {
			"name": "风险原因1",
			"value": 67677
		}, {
			"name": "风险原因1",
			"value": 30619
		}, {
			"name": "风险原因1",
			"value": 15397
		}, {
			"name": "其他",
			"value": 85598
		}].map((item, index) => ({
			...item,
			name: `${item.name}-${index}`
		})),
		"total": 6036714,
		"title": "风险原因分布"
	}));
};
