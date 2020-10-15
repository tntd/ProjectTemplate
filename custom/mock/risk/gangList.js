const { success } = require('../utils');

module.exports = (req, res) => {
	const page = +req.query.page || 1;
	const pageSize = +req.query.pageSize || 20;
	const data = new Array(101).fill({}).map((item, index) => ({
		"gangId": `${index + 1}`,
		"riskType": "注册",
		"discoveryTime": "2019-10-10 10:00:00",
		"userCount": "123,456,789",
		"riskEventCount":  "123,456,789",
		"gangRiskScore": 0.95
	}));

    res.send(success({
		"page": page,
		"pageSize": pageSize,
		"total": data.length,
		"chart": {
			"title": "风险团伙",
			"headers": [{
				"key": "gangId",
				"value": "团伙id"
			}, {
				"key": "riskType",
				"value": "风险类型"
			},{
				"key": "discoveryTime",
				"value": "发现时间",
				"sort": true
			},{
				"key": "userCount",
				"value": "风险用户数",
				"sort": true
			},{
				"key": "riskEventCount",
				"value": "风险事件数",
				"sort": true
			},{
				"key": "gangRiskScore",
				"value": "团伙风险分",
				"sort": true
			}],
			"rowDatas": data.slice((page - 1) * pageSize, page * pageSize)
		}
	}));
};
