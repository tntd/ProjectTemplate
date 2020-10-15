const { success } = require('../utils');

module.exports = (req, res) => {
    res.send(success({
		"page": 1,
		"pageSize": 2,
		"total": 10,
		"riskCauses": ["IP地址存在风险XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			"WIFI地址存在风险XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			"基站地址存在风险XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
		],
		"charts": [{
			"title": "",
			"headers": [{
				"key": "time",
				"value": "2019年10月09日"
			}, {
				"key": "riskCause",
				"value": "风险分"
			}],
			"rowDatas": [{
				"time": "15:29:30",
				"riskCause": "0.5"
			}]
		}, {
			"title": "",
			"headers": [{
				"key": "time",
				"value": "2019年10月10日"
			}, {
				"key": "riskCause",
				"value": "风险分"
			}],
			"rowDatas": [{
				"time": "15:29:30",
				"riskCause": "0.5"
			}]
		}]
	}));
};
