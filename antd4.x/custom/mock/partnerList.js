const { success } = require('./utils');

module.exports = (req, res) => {
    res.send(success({
		"kujia": "酷家乐",
		"jiamiantech": "假面科技",
		"hqhk": "环球黑卡"
	}));
};
