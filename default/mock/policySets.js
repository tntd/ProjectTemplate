const { success, getPaginationResponse } = require('./utils');

const queryPolicySets = (req, res) => {
	const data = new Array(101).fill({}).map((item, index) => ({
        "id": item.id + index,
        "uuid": `8d947d0717734e759f094311fe40e2b9${index}`,
        "gmtCreate": "2020-02-18 10:34:59",
        "name": `pscaiyufei0218-${index}`,
        "partnerCode": "kratos",
        "appName": "wbank",
        "eventType": "Login",
        "eventId": "wbank_pscaiyufei0218",
        "description": "",
        "createBy": "admin",
        "policyList": [
            {
                "uuid": "b3ebf04cf4ad4b1dbf7fae229c715c1b",
                "gmtCreate": "2020-02-18 10:36:39",
                "name": "pcaiyufei0218",
                "riskEventId": "wbank_pscaiyufei0218",
                "riskEventType": "Login",
                "mode": "Weighted",
                "denyThreshold": 0,
                "reviewThreshold": 0,
                "partner": "kratos",
                "appName": "wbank",
                "description": "",
                "createBy": "admin",
                "riskType": "accountTakeover",
                "level": 0,
                "fkPolicySetUuid": "8d947d0717734e759f094311fe40e2b9",
                "indexes": [],
                "velocityFields": [],
                "ruleParamsCheckMap": {},
                "sysRuleFieldList": [],
                "extRuleFieldList": [],
                "ruleConditionElementList": [],
                "dealTypeMapping": "[{\"dealType\":\"Accept\",\"score\":30},{\"dealType\":\"review\",\"score\":60},{\"dealType\":\"refuse\",\"score\":100}]",
                "policyVersion": 2,
                "policyTemplate": false
            }
        ],
        "appDisplayName": "网上银行",
        "status": true,
        "type": "normal",
        "hasPublicPolicy": true
    }));

    res.send(
        getPaginationResponse(req, data)
    );
};

module.exports = {
    'GET /policySets': queryPolicySets
};

