const { success } = require('../utils');

module.exports = (req, res) => {
    res.send(success({
		"title": "风险风",
		"x": ["<0.1", "0.1-0.2", "0.2-0.3", "0.3-0.4", "0.4-0.5", "0.5-0.6", ">=0.6"],
		"y": [
			[{
				"name": "",
				"datas": ["0", "0", "99", "999", "9999", "99999", "99999"]
			}]
		]
	}));
};
