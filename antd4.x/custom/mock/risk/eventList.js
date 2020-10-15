const { success } = require('../utils');

module.exports = (req, res) => {
	const page = +req.query.page || 1;
	const pageSize = +req.query.pageSize || 20;
	const data = new Array(101).fill({}).map((item, index) => ({
		"bhvId": "1576473240080707S393C28754999492",
		"riskScore": 1,
		"gangId": null,
		"catchWay": "single",
		"riskCause": "有监督发现",
		"attrInfo": "{\"riskstatus\":\"Reject\",\"algo\":\"single\",\"inviteid\":\"21196971\",\"ipaddress\":\"117.165.45.158\",\"accountmobile\":\"15607072198\"}"
	}));

    res.send(success({
		"page": page,
		"pageSize": pageSize,
		"total": data.length,
		"chart": {
			"title": "风险事件列表",
			"headers": [
				{
					"key": "bhvId",
					"value": "事件ID",
					"sort": false
				},
				{
					"key": "riskScore",
					"value": "风险分",
					"sort": true
				},
				{
					"key": "gangId",
					"value": "团伙ID",
					"sort": false
				},
				{
					"key": "catchWay",
					"value": "发现方法",
					"sort": false
				},
				{
					"key": "riskCause",
					"value": "风险原因",
					"sort": false
				},
				{
					"key": "attrInfo",
					"value": "详情",
					"sort": false
				}
			],
			"rowDatas": data.slice((page - 1) * pageSize, page * pageSize)
		}
	}));
};
