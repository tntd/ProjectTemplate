const { success } = require('./utils');

module.exports = (req, res) => {
    res.send(success({
        "eventCount": 10, // 检测事件总数
		"userCount": 10, // 检测用户总数
		"riskEventCount": 4, // 风险事件数
		"riskEventPercent": "50%", // 风险事件 占比
		"riskEventGainCount": 4, // 风险事件数 增益量
		"riskEventGainPercent": "40.1%", // 风险事件数 增益率
		"riskUserCount": 5, // 风险用户数
		"riskUserPercent":"30%", // 风险用户 占比
		"riskUserGainCount": 2, // 风险用户数 增益量
		"riskUserGainPercent": "20.1%", // 风险用户数 增益率
		"riskGangCount": 2 // 风险团伙数
    }));
};
