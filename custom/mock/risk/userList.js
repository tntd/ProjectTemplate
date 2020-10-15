const { success } = require('../utils');

module.exports = (req, res) => {
	const page = +req.query.page || 1;
	const pageSize = +req.query.pageSize || 20;
	const data = new Array(101).fill({}).map((item, index) => ({
		"userId": `${index + 1}`,
		"riskType": "注册",
		"riskScore": 0.95,
		"gangId": "团伙ID",
		"discoveryMethod": "算法1",
		"discoveryTime": "2019-10-10 10:00:00",
		"relatedRiskCount": 7
	}));

    res.send(success({
		"page": page,
		"pageSize": pageSize,
		"total": data.length,
		"chart": {
			"title": "团伙列表",
			"headers": [{
				"key": "userId",
				"value": "用户ID"
			}, {
				"key": "riskScore",
				"value": "风险分",
				"sort": true
			},{
				"key": "userId",
				"value": "用户ID"
			}, {
				"key": "gangId",
				"value": "团伙ID",
				"sort": true
			},{
				"key": "discoveryMethod",
				"value": "发现方法"
			}, {
				"key": "discoveryTime",
				"value": "初次发现时间",
				"sort": true
			},{
				"key": "relatedRiskCount",
				"value": "关联风险事件数",
				"sort": true
			}],
			"rowDatas": data.slice((page - 1) * pageSize, page * pageSize)
		}
	}));
};
