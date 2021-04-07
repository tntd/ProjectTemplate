const { success } = require('./utils');

module.exports = (req, res) => {
    res.send(
        success({
            code: 'salaxy2.0dev',
            enName: 'salaxy2.0dev',
            logo: 'logo-custom.svg',
            menuTree: [
                {
                    code: 'monitorin2',
                    icon: 'monitorin',
                    menuName: '我的工作台-1',
                    menuUuid: '4972735a01404a53a5d307e008422d0b-1',
                    path: '/tnt_cli_identify/dashboard/workspace',
                    sortNo: 1
                },
                {
                    children: [
                        {
                            code: 'JY0201',
                            enName: 'Risk Trend',
                            functionList: [
                                {
                                    code: 'riskTrend',
                                    funcUuid:
                                        '8790ee7915464ee29c021789d735b907',
                                    hasPermission: true,
                                    name: '风险事件趋势大盘'
                                },
                                {
                                    code: 'exportDailyData',
                                    funcUuid:
                                        '3193b1558f6d4818b65e617fc84bede7',
                                    hasPermission: true,
                                    name: '风险事件统计导出excel'
                                },
                                {
                                    code: 'riskTypeDataExport',
                                    funcUuid:
                                        '0e54febbb9824952ad7e37d5951a60ab',
                                    hasPermission: true,
                                    name: '风险事件类型数据导出excel'
                                },
                                {
                                    code: 'dimensionData',
                                    funcUuid:
                                        'e91771d5ac4848cbb5c0ded721faf199',
                                    hasPermission: true,
                                    name: '字段命中数据分布'
                                },
                                {
                                    code: 'riskTypeData',
                                    funcUuid:
                                        'ea13ed715cc847e5b925e9360ca6389c',
                                    hasPermission: true,
                                    name: '风险事件类型分布'
                                },
                                {
                                    code: 'dimensionData',
                                    funcUuid:
                                        '5a2db62cb75f4ce9b689c7b9cf5feb17',
                                    hasPermission: true,
                                    name: '字段命中次数排行导出excel'
                                }
                            ],
                            gmtCreate: 1570599997000,
                            hasPermission: false,
                            icon: 'chart-line',
                            menuName: '风险趋势分析',
                            menuUuid: '9a5cdea207c24f018ff014b678664af2',
                            path: '/tnt_cli_identify/trend/riskTrend',
                            sortNo: 2
                        },
                        {
                            code: 'JY0101',
                            enName: 'Hit Rules',
                            functionList: [
                                {
                                    code: 'hitRulePolicies',
                                    funcUuid:
                                        'd53e729d6a7c4249b91aa11d7eda66f8',
                                    hasPermission: true,
                                    name: '策略集合接口'
                                },
                                {
                                    code: 'hitRules',
                                    funcUuid:
                                        '929789057be84379bd9b1d38e47955a3',
                                    hasPermission: true,
                                    name: '条件查询'
                                },
                                {
                                    code: 'downloadExcel',
                                    funcUuid:
                                        '0c26adcd724446179841fdbbf7ab23b6',
                                    hasPermission: true,
                                    name: '下载xls与csv'
                                }
                            ],
                            gmtCreate: 1570599997000,
                            hasPermission: false,
                            icon: 'warning',
                            menuName: '规则预警分布',
                            menuUuid: 'f579b0dfbf7140c2af9d2f0a11102c90',
                            path: '/tnt_cli_identify/rule/hitRule',
                            sortNo: 3
                        },
                        {
                            code: 'JY0308',
                            enName: 'Rule Monitor',
                            functionList: [
                                {
                                    code: 'ruleHitDetail',
                                    funcUuid:
                                        '26c8b77e7def4173944811d15ff9d1a5',
                                    hasPermission: true,
                                    name: '规则命中详情'
                                },
                                {
                                    code: 'getRules',
                                    funcUuid:
                                        '207a870a38ba48449978efd99a3f15df',
                                    hasPermission: true,
                                    name: '查询策略集下所有运行规则'
                                },
                                {
                                    code: 'getPolicySets',
                                    funcUuid:
                                        'cdff5fb2746d40459c1cfe4aed668f62',
                                    hasPermission: true,
                                    name: '查询应用下所有策略集'
                                },
                                {
                                    code: 'ruleHitList',
                                    funcUuid:
                                        '7e15cc460bd849c7b4d9c843e2d77e54',
                                    hasPermission: true,
                                    name: '规则命中列表'
                                },
                                {
                                    code: 'getPolicySetHitDetail',
                                    funcUuid:
                                        'fef928f056904caf83ee2b46eff91341',
                                    hasPermission: true,
                                    name:
                                        '统计策略集的处置方式在一段时间内的占比'
                                },
                                {
                                    code: 'getPolicySetHitData',
                                    funcUuid:
                                        '117cecdae0054be99200712177d3c6cc',
                                    hasPermission: true,
                                    name: '统计各个策略集每个处置方式的占比'
                                }
                            ],
                            gmtCreate: 1570599997000,
                            hasPermission: false,
                            icon: 'setting',
                            menuName: '规则运行监控',
                            menuUuid: '872160674f3646efaded80d367045c77',
                            path: '/tnt_cli_identify/policy/ruleRunningMonitor',
                            sortNo: 4
                        },
                        {
                            code: 'JY0306',
                            enName: 'Rule Running',
                            functionList: [
                                {
                                    code: 'ruleRunningDetail',
                                    funcUuid:
                                        '3e004e34037f440b86d18884850ff2f8',
                                    hasPermission: true,
                                    name: '事件详情'
                                },
                                {
                                    code: 'queryPolicies',
                                    funcUuid:
                                        '6b0ba7e76b6445eca81d5f828d7b27eb',
                                    hasPermission: true,
                                    name: '查询策略'
                                },
                                {
                                    code: 'saveTableHead',
                                    funcUuid:
                                        '9fafb153b9054e06909d00af7c0a19eb',
                                    hasPermission: true,
                                    name: '保存定制表头'
                                },
                                {
                                    code: 'ruleRunningSearch',
                                    funcUuid:
                                        '97eb2b747e0f40c5b4184613224386a6',
                                    hasPermission: true,
                                    name: '列表查询'
                                }
                            ],
                            gmtCreate: 1570599997000,
                            hasPermission: false,
                            icon: 'setting',
                            menuName: '规则运行管理',
                            menuUuid: 'c0f8f51e35a743eda5b76d4e44a9f60a',
                            path: '/tnt_cli_identify/policy/ruleRunning',
                            sortNo: 5
                        },
                        {
                            code: 'RiskMap',
                            enName: 'RiskMap',
                            functionList: [
                                {
                                    code: 'riskMapRealTask',
                                    funcUuid:
                                        '90388469c5754d79a8a0db6a6897e12f',
                                    hasPermission: true,
                                    name: '中国风险地图事件实时列表'
                                },
                                {
                                    code: 'riskMapRiskTop',
                                    funcUuid:
                                        'eb59caf5a9eb4af28d191d5727422872',
                                    hasPermission: true,
                                    name: '中国风险地图热力图排行榜'
                                },
                                {
                                    code: 'globalRiskMapRiskTop',
                                    funcUuid:
                                        'f6529ccbd63148f3a3bbadb734130508',
                                    hasPermission: true,
                                    name: '全球风险地图排行'
                                },
                                {
                                    code: 'requestTotal',
                                    funcUuid:
                                        'd8b51cdf6e454199814b252d6402451b',
                                    hasPermission: true,
                                    name: '一天之内请求总量拦截总量'
                                },
                                {
                                    code: 'riskMapExport',
                                    funcUuid:
                                        '590c0ff2fcaa4dc0970a0c74fcfd1a46',
                                    hasPermission: true,
                                    name: '中国风险地图排行榜导出'
                                }
                            ],
                            gmtCreate: 1570599997000,
                            hasPermission: false,
                            icon: 'graph',
                            menuName: '风险全景地图',
                            menuUuid: '9f96ba1738fe497e85d87c17a583f39d',
                            path: '/tnt_cli_identify/map',
                            sortNo: 6
                        }
                    ],
                    code: 'TR01',
                    enName: 'Dashboard',
                    gmtCreate: 1559028029000,
                    groupIcon: 'monitorin',
                    groupName: '风控管理驾驶舱',
                    sortNo: 1
                },
                {
                    children: [
                        {
                            code: 'ZB0101',
                            enName: 'Policy',
                            functionList: [
                                {
                                    code: 'policyCommit',
                                    funcUuid:
                                        '42cb4353570f46c6bcfe16143e53b6f6',
                                    hasPermission: true,
                                    name: '策略版本提交'
                                },
                                {
                                    code: 'EffectPublicPolicy',
                                    funcUuid:
                                        '486cc822206d415587a0ec1677bd394d',
                                    hasPermission: true,
                                    name: '生效公共策略'
                                },
                                {
                                    code: 'editorSearch',
                                    funcUuid:
                                        '32877ac7fc244859833844edb2c8d852',
                                    hasPermission: true,
                                    name: '编辑区查询'
                                },
                                {
                                    code: 'VersionPoliciesWithRules',
                                    funcUuid:
                                        '3e3d3a4628094ca88be305d143dcf493',
                                    hasPermission: true,
                                    name: '策略集运行策略列表'
                                },
                                {
                                    code: 'policyVersionDetail',
                                    funcUuid:
                                        'f284a51fb70f4e7cb80b8125a440e202',
                                    hasPermission: true,
                                    name: '策略版本详情'
                                },
                                {
                                    code: 'editorImportPolicyList',
                                    funcUuid:
                                        '1bc0108f943e4614be6a61eb1a9329ef',
                                    hasPermission: true,
                                    name: '编辑区导入策略集'
                                },
                                {
                                    code: 'sortRule',
                                    funcUuid:
                                        'ac2f0410ee444a03984b20b7d5f86fb6',
                                    hasPermission: true,
                                    name: '规则排序'
                                },
                                {
                                    code: 'editorAddPolicy',
                                    funcUuid:
                                        'e294b748f29e4d78a9c1bc4a9d2c5fd8',
                                    hasPermission: true,
                                    name: '编辑区添加策略'
                                },
                                {
                                    code: 'RuleToBackTest',
                                    funcUuid:
                                        'd0b5d5bdca0e4ad692c301b6cb18a0a6',
                                    hasPermission: true,
                                    name: '规则添加回测'
                                },
                                {
                                    code: 'editorDecisionFlowSave',
                                    funcUuid:
                                        '55234556277f494191e207a7e2d9fc0e',
                                    hasPermission: true,
                                    name: '编辑区规则流保存'
                                },
                                {
                                    code: 'updateRule',
                                    funcUuid:
                                        '23b31fc6183b4752b2ac9fd28e22bfb7',
                                    hasPermission: true,
                                    name: '更新规则'
                                },
                                {
                                    code: 'ModifyPsReplayTask',
                                    funcUuid:
                                        '855fe59165b640f2bf1d4cae89422009',
                                    hasPermission: true,
                                    name: '修改策略集回测任务'
                                },
                                {
                                    code: 'policyVersionSwitch',
                                    funcUuid:
                                        '886337a2f593449e9b16343c224dcf7b',
                                    hasPermission: true,
                                    name: '策略版本切换'
                                },
                                {
                                    code: 'changeRuleState',
                                    funcUuid:
                                        '564a782e10454789b75dad92adf6a7d8',
                                    hasPermission: true,
                                    name: '规则状态变更'
                                },
                                {
                                    code: 'viewPolicyRuleList',
                                    funcUuid:
                                        '57e1a0fd406741fcb639918d7f78c888',
                                    hasPermission: true,
                                    name: '查看策略规则列表'
                                },
                                {
                                    code: 'editorDecisionFlowExport',
                                    funcUuid:
                                        '3b4c21a63ea9416ea726b90ea15b7459',
                                    hasPermission: true,
                                    name: '规则流导出'
                                },
                                {
                                    code: 'getPolicy',
                                    funcUuid:
                                        '8887b951617442fdb7f7cada8ffd50e4',
                                    hasPermission: true,
                                    name: '策略详情'
                                },
                                {
                                    code: 'editorDecisionFlowDelete',
                                    funcUuid:
                                        'af49fe05725a41b88ca823db224e2bda',
                                    hasPermission: true,
                                    name: '编辑区规则流删除'
                                },
                                {
                                    code: 'immunoRuleQuery',
                                    funcUuid:
                                        'ff5947fd64234c389cda87f4ba5feca8',
                                    hasPermission: true,
                                    name: '规则免疫查询'
                                },
                                {
                                    code: 'editorDeletePolicy',
                                    funcUuid:
                                        '150ca735bb894860ac125c7c009c8d90',
                                    hasPermission: true,
                                    name: '编辑区删除策略'
                                },
                                {
                                    code: 'deleteRule',
                                    funcUuid:
                                        '077af778dad240d0a46314bc091ef374',
                                    hasPermission: true,
                                    name: '删除规则'
                                },
                                {
                                    code: 'viewPolicyCiteIndex',
                                    funcUuid:
                                        '41daaac605ee405f92a60229953b5b99',
                                    hasPermission: true,
                                    name: '查看策略引用指标'
                                },
                                {
                                    code: 'editorImportRules',
                                    funcUuid:
                                        '186f8f75460b4269bdd4daf3f7c91cd3',
                                    hasPermission: true,
                                    name: '编辑区导入规则'
                                },
                                {
                                    code: 'editorAddPolicySet',
                                    funcUuid:
                                        '5e9912d7e015467fba88eb63577924e4',
                                    hasPermission: true,
                                    name: '编辑区新建策略集'
                                },
                                {
                                    code: 'editorDecisionFlowUpdate',
                                    funcUuid:
                                        'dd300540b6584f7bb6e788006707e421',
                                    hasPermission: true,
                                    name: '编辑区规则流更新'
                                },
                                {
                                    code: 'editorDecisionFlowCommit',
                                    funcUuid:
                                        'e4f2103fc74249bfb7b23dbd83d03e64',
                                    hasPermission: true,
                                    name: '编辑区规则流提交'
                                },
                                {
                                    code: 'immunoRuleDelete',
                                    funcUuid:
                                        '888121bdddc348dda691d3b035af3dbf',
                                    hasPermission: true,
                                    name: '规则免疫删除'
                                },
                                {
                                    code: 'modifyCustomId',
                                    funcUuid:
                                        '5f322e91a7934e75bedc11c96044dda1',
                                    hasPermission: true,
                                    name: '规则修改自定义编号'
                                },
                                {
                                    code: 'immunoRuleAdd',
                                    funcUuid:
                                        'ea5a0de8c6834b5c98650eba802eb5f5',
                                    hasPermission: true,
                                    name: '规则免疫新增'
                                },
                                {
                                    code: 'immunoRuleHistory',
                                    funcUuid:
                                        '0514cf5e0a8f4d758db6098a361710af',
                                    hasPermission: true,
                                    name: '规则免疫历史'
                                },
                                {
                                    code: 'decisionFlowHistory',
                                    funcUuid:
                                        'b81d5baad8e4497c9ade7510479bd267',
                                    hasPermission: true,
                                    name: '规则流历史版本'
                                },
                                {
                                    code: 'pasteRule',
                                    funcUuid:
                                        'cabf48048c9f480a9f9ec41af3126bea',
                                    hasPermission: true,
                                    name: '复制粘贴规则'
                                },
                                {
                                    code: 'editorDecisionFlowImport',
                                    funcUuid:
                                        'de800ea122f54a899c1dde2aace09aef',
                                    hasPermission: true,
                                    name: '规则流导入'
                                },
                                {
                                    code: 'addToCustomList',
                                    funcUuid:
                                        'cc36f63760a04368878ed9266063edf9',
                                    hasPermission: true,
                                    name: '添加到自定义列表'
                                },
                                {
                                    code: 'editorDecisionFlow',
                                    funcUuid:
                                        'bc0ee4b38a7e4be897192febac1f3db4',
                                    hasPermission: true,
                                    name: '编辑区规则流查看'
                                },
                                {
                                    code: 'viewPolicyHistoryVersion',
                                    funcUuid:
                                        '93ca102452f54e469e36b84c5e414a42',
                                    hasPermission: true,
                                    name: '查看历史版本'
                                },
                                {
                                    code: 'addRule',
                                    funcUuid:
                                        '6a683a3ecc00490e9de3dd8614ac72f3',
                                    hasPermission: true,
                                    name: '添加规则'
                                },
                                {
                                    code: 'decisionFlowHistoryDetail',
                                    funcUuid:
                                        '2cf2b6c80b084a8a97200aad542c849b',
                                    hasPermission: true,
                                    name: '规则流版本详情'
                                },
                                {
                                    code: 'editorExportRules',
                                    funcUuid:
                                        'c6f9e440b7de450f99e464d7403f8032',
                                    hasPermission: true,
                                    name: '编辑区导出规则'
                                },
                                {
                                    code: 'AddPsReplayTask',
                                    funcUuid:
                                        'bfdb6e06e6ca45faa02f44c322f4bd04',
                                    hasPermission: true,
                                    name: '添加策略集回测任务'
                                },
                                {
                                    code: 'editorTestPolicySet',
                                    funcUuid:
                                        'cf8961fa170d4cd1a7471dda46a6b041',
                                    hasPermission: true,
                                    name: '编辑区测试策略集'
                                },
                                {
                                    code: 'immunoRuleModify',
                                    funcUuid:
                                        '9845ec15d0654a18a382a4398c86f308',
                                    hasPermission: true,
                                    name: '规则免疫修改'
                                },
                                {
                                    code: 'decisionFlowSwitch',
                                    funcUuid:
                                        '9d29a3c636fb4ed497338b4749b9a395',
                                    hasPermission: true,
                                    name: '规则流版本切换'
                                },
                                {
                                    code: 'editorDeletePolicySet',
                                    funcUuid:
                                        '42a1d4c191de4a90be084bd1bcf72038',
                                    hasPermission: true,
                                    name: '编辑区删除策略集'
                                },
                                {
                                    code: 'runningSearch',
                                    funcUuid:
                                        '38e06c76e2f347bca79022170b00358e',
                                    hasPermission: true,
                                    name: '运行区查询'
                                },
                                {
                                    code: 'editorModifyPolicy',
                                    funcUuid:
                                        'bf681960b1c24b4a97e014259a4b847c',
                                    hasPermission: true,
                                    name: '编辑区编辑策略'
                                },
                                {
                                    code: 'editorModifyPolicySet',
                                    funcUuid:
                                        'ea81f214fdd54799aef7112bc73347b0',
                                    hasPermission: true,
                                    name: '编辑区修改策略集'
                                },
                                {
                                    code: 'QueryPsReplayTaskDetail',
                                    funcUuid:
                                        '140032cea7514de6a9822e5b8e158cf7',
                                    hasPermission: true,
                                    name: '查询策略集回测任务详情'
                                },
                                {
                                    code: 'editorExportPolicySet',
                                    funcUuid:
                                        '8139d57028eb424f82e6eba8e5a04a86',
                                    hasPermission: true,
                                    name: '编辑区导出策略集'
                                }
                            ],
                            gmtCreate: 1575594670000,
                            hasPermission: false,
                            icon: 'celve1',
                            menuName: '规则管理',
                            menuUuid: '3c36d4dab163414db3e8d1de40817695',
                            path: '/index/policy/policyList',
                            sortNo: 1
                        },
                        {
                            code: 'ZB0102',
                            enName: 'Real time Attributes',
                            functionList: [
                                {
                                    code: 'editorAddIndex',
                                    funcUuid:
                                        'b7e5d9eb712b46069a594755fb600e0c',
                                    hasPermission: true,
                                    name: '编辑区新建指标'
                                },
                                {
                                    code: 'editorViewCite',
                                    funcUuid:
                                        'd80c60f563af43eea98cd4678075066e',
                                    hasPermission: true,
                                    name: '编辑区查看引用指标'
                                },
                                {
                                    code: 'switchVersion',
                                    funcUuid:
                                        '19ad2321207d4974845fe03a7cf21b1a',
                                    hasPermission: true,
                                    name: '切换版本'
                                },
                                {
                                    code: 'indicesBatchOnline',
                                    funcUuid:
                                        'b55c312ff81143839ee44ad4ba3b54f7',
                                    hasPermission: true,
                                    name: '指标批量上线'
                                },
                                {
                                    code: 'editorImport',
                                    funcUuid:
                                        '6ca9d68cd0064b0fac8ae91710738d68',
                                    hasPermission: true,
                                    name: '编辑区导入'
                                },
                                {
                                    code: 'editorSalaxyDetail',
                                    funcUuid:
                                        '10a474a5a05d45899648745a26a0c0c3',
                                    hasPermission: true,
                                    name: '编辑区指标详情'
                                },
                                {
                                    code: 'editorModifyIndex',
                                    funcUuid:
                                        'b3d55cb473744d97b642a8017bc1b4b2',
                                    hasPermission: true,
                                    name: '编辑区指标修改'
                                },
                                {
                                    code: 'runningSearch',
                                    funcUuid:
                                        '902b6344050f4aef927e734f2e448827',
                                    hasPermission: true,
                                    name: '运行区查询'
                                },
                                {
                                    code: 'editorSubmitVersion',
                                    funcUuid:
                                        '56a954737f4b4f70a031e2e987b0ffb2',
                                    hasPermission: true,
                                    name: '编辑区指标提交版本'
                                },
                                {
                                    code: 'editorViewHistoryVersion',
                                    funcUuid:
                                        'd82935a753e44cf2956bc63fc73d1494',
                                    hasPermission: true,
                                    name: '编辑区查看历史版本'
                                },
                                {
                                    code: 'editorSearch',
                                    funcUuid:
                                        '0c56e15508d44146b9b5859b86b4dbfb',
                                    hasPermission: true,
                                    name: '编辑区指标列表查询'
                                },
                                {
                                    code: 'editorModifyStatus',
                                    funcUuid:
                                        'faf7668ab48741cd8596ce3006005b1f',
                                    hasPermission: true,
                                    name: '编辑区修改状态'
                                },
                                {
                                    code: 'indicesBatchOffline',
                                    funcUuid:
                                        '02807228ba6f417581d2f8b677c34884',
                                    hasPermission: true,
                                    name: '指标批量下线'
                                },
                                {
                                    code: 'editorExport',
                                    funcUuid:
                                        '9ad83bc6e661458dbcfb972b04e3b5e3',
                                    hasPermission: true,
                                    name: '编辑区导出'
                                },
                                {
                                    code: 'editorCopyIndex',
                                    funcUuid:
                                        'b33bdbc0cd424957bbc87822eaca1b87',
                                    hasPermission: true,
                                    name: '编辑区拷贝指标'
                                },
                                {
                                    code: 'editorDeleteIndex',
                                    funcUuid:
                                        '65689586598048a3804ff3b08e50337d',
                                    hasPermission: true,
                                    name: '编辑区删除指标'
                                }
                            ],
                            gmtCreate: 1575594670000,
                            hasPermission: false,
                            icon: 'zhibiao',
                            menuName: '实时指标',
                            menuUuid: 'a5a77c19e42e46219bc1cd12158184a7',
                            path: '/index/policy/salaxy',
                            sortNo: 2
                        },
                        {
                            code: 'XD0201',
                            enName: 'Decision Flow',
                            functionList: [
                                {
                                    code: 'applyOfflineWorkflow',
                                    funcUuid:
                                        '66ba2471eaec4c2a8b38158ab48e719a',
                                    hasPermission: true,
                                    name: '决策流申请下线'
                                },
                                {
                                    code: 'workflowSave',
                                    funcUuid:
                                        '6d82a750ca9d4083b42b3446e646861d',
                                    hasPermission: true,
                                    name: '决策流保存'
                                },
                                {
                                    code: 'workflowStaging',
                                    funcUuid:
                                        '8ba9c1f83cb7488dbf49acbfb8a6426c',
                                    hasPermission: true,
                                    name: '决策流暂存'
                                },
                                {
                                    code: 'importSubWorkflow',
                                    funcUuid:
                                        'b18d54a8e5d2463592083bcc6dd42da8',
                                    hasPermission: true,
                                    name: '子决策流导入'
                                },
                                {
                                    code: 'workflowSearch',
                                    funcUuid:
                                        '017bc9b065d0448cbe089a483512a8c7',
                                    hasPermission: true,
                                    name: '决策流查询'
                                },
                                {
                                    code: 'subWorkflowSave',
                                    funcUuid:
                                        'd5a163720ce245f4a6dbcbaa87fb5877',
                                    hasPermission: true,
                                    name: '子决策流保存'
                                },
                                {
                                    code: 'deleteSubWorkflow',
                                    funcUuid:
                                        'eb6d76e738af4eebb5c0133b05eda887',
                                    hasPermission: true,
                                    name: '子决策流删除'
                                },
                                {
                                    code: 'copyWorkflow',
                                    funcUuid:
                                        '3fe2f0637cea441590b025b07abb0bc9',
                                    hasPermission: true,
                                    name: '决策流复制'
                                },
                                {
                                    code: 'subWorkflowNameEdit',
                                    funcUuid:
                                        '160a2cf7645448a3914ec9a4c3d564e9',
                                    hasPermission: true,
                                    name: '子决策流名称修改'
                                },
                                {
                                    code: 'applyOnlineWorkflow',
                                    funcUuid:
                                        '2ab8aa4d6e7841af91272b3069ed1d14',
                                    hasPermission: true,
                                    name: '决策流申请上线'
                                },
                                {
                                    code: 'exportWorkflow',
                                    funcUuid:
                                        '344e316cc1c94e0ca8cd29e2ead47b4a',
                                    hasPermission: true,
                                    name: '决策流导出'
                                },
                                {
                                    code: 'workflowNameEdit',
                                    funcUuid:
                                        '24fdebf1e4d04e878025f59638e8d16a',
                                    hasPermission: true,
                                    name: '决策流名称修改'
                                },
                                {
                                    code: 'workflowBackTest',
                                    funcUuid:
                                        '54732305baec4d9bad148c0f441a1444',
                                    hasPermission: true,
                                    name: '决策流回测'
                                },
                                {
                                    code: 'workflowTest',
                                    funcUuid:
                                        '612c1e2e03d9496d995c8af054203bdd',
                                    hasPermission: true,
                                    name: '决策流测试'
                                },
                                {
                                    code: 'workflowDetail',
                                    funcUuid:
                                        '7a4676cff71b4d5694590c66a3834f18',
                                    hasPermission: true,
                                    name: '决策流详情'
                                },
                                {
                                    code: 'subWorkflowSearch',
                                    funcUuid:
                                        '49a8e1544e8b4897ae2eddb6eb481d1f',
                                    hasPermission: true,
                                    name: '子决策流查询'
                                },
                                {
                                    code: 'subWorkflowStaging',
                                    funcUuid:
                                        '673eff922d1143528f3d69d3c7c79fdd',
                                    hasPermission: true,
                                    name: '子决策流暂存'
                                },
                                {
                                    code: 'copySubWorkflow',
                                    funcUuid:
                                        '7c1a86386f02422d8bc2c3807b27f976',
                                    hasPermission: true,
                                    name: '子决策流复制'
                                },
                                {
                                    code: 'subWorkflowDetail',
                                    funcUuid:
                                        '131c2b10c06e47d2afea92f6f9271f9b',
                                    hasPermission: true,
                                    name: '子决策流详情'
                                },
                                {
                                    code: 'createWorkflow',
                                    funcUuid:
                                        '6857fabcb1bb4e599cba571276e0f5e5',
                                    hasPermission: true,
                                    name: '决策流创建'
                                },
                                {
                                    code: 'createSubWorkflow',
                                    funcUuid:
                                        '6d5246e081154dada884ffd6c3bd1f9e',
                                    hasPermission: true,
                                    name: '子决策流创建'
                                },
                                {
                                    code: 'applyOfflineSubWorkflow',
                                    funcUuid:
                                        '7925cd50ba4b4a3d92bf979fb84a3c31',
                                    hasPermission: true,
                                    name: '子决策流申请下线'
                                },
                                {
                                    code: 'importWorkflow',
                                    funcUuid:
                                        '7fa6db3e67014a94bf22464a0edb7d62',
                                    hasPermission: true,
                                    name: '决策流导入'
                                },
                                {
                                    code: 'deleteWorkflow',
                                    funcUuid:
                                        '5d2dd56cabaa4cc785a508c932918e44',
                                    hasPermission: true,
                                    name: '决策流删除'
                                },
                                {
                                    code: 'subWorkflowLog',
                                    funcUuid:
                                        'bc526116581e4eb5b5918310e96e97d4',
                                    hasPermission: true,
                                    name: '子决策流操作日志'
                                },
                                {
                                    code: 'workflowLog',
                                    funcUuid:
                                        '10b348431abc457dbd6dc678023e9620',
                                    hasPermission: true,
                                    name: '决策流操作日志'
                                },
                                {
                                    code: 'exportSubWorkflow',
                                    funcUuid:
                                        '1cf16ef767124437becc17562badd5ad',
                                    hasPermission: true,
                                    name: '子决策流导出'
                                },
                                {
                                    code: 'applyOnlineSubWorkflow',
                                    funcUuid:
                                        '441d3950cd7843e4b2a3affeb6408635',
                                    hasPermission: true,
                                    name: '子决策流申请上线'
                                }
                            ],
                            gmtCreate: 1563160076000,
                            hasPermission: false,
                            icon: '123',
                            menuName: '决策流管理',
                            menuUuid: 'ce17aa31668b4bf2af8c25d5410a0c96',
                            path: '/credit/workflowList',
                            sortNo: 3
                        },
                        {
                            code: 'messageTemplate',
                            enName: 'Message Template',
                            functionList: [
                                {
                                    code: 'addMessageTemplate',
                                    funcUuid:
                                        '46dfbabfbeb34095a2d11d5d0f8de827',
                                    hasPermission: true,
                                    name: '新建消息模版'
                                },
                                {
                                    code: 'messageTemplateDetail',
                                    funcUuid:
                                        '64e9f5ae0e5d404cbcb0d0913003ac54',
                                    hasPermission: true,
                                    name: '消息模版详情'
                                },
                                {
                                    code: 'messageTemplate',
                                    funcUuid:
                                        'fcde2888fe2141b8a9e49ea0470646a7',
                                    hasPermission: true,
                                    name: '消息模版列表'
                                },
                                {
                                    code: 'updateMessageTemplate',
                                    funcUuid:
                                        '869f61b6f9764569ba0a9db56f29bd8b',
                                    hasPermission: true,
                                    name: '编辑消息模版'
                                },
                                {
                                    code: 'deleteMessageTemplate',
                                    funcUuid:
                                        'ac550527a6a24a7f999ac79195980878',
                                    hasPermission: true,
                                    name: '删除消息模版'
                                }
                            ],
                            gmtCreate: 1570599997000,
                            hasPermission: false,
                            icon: 'mt',
                            menuName: '消息模板管理',
                            menuUuid: '8225c58f388640eabab5a604267ece53',
                            path: '/tnt_cli_identify/message/template',
                            sortNo: 4
                        },
                        {
                            code: 'messageTemplateRelation',
                            enName: 'Message Template Relation',
                            functionList: [
                                {
                                    code: 'messageTemplateRelation',
                                    funcUuid:
                                        'a1776f4af92d45f7a96b02af0892ba67',
                                    hasPermission: true,
                                    name: '消息模版关联列表'
                                },
                                {
                                    code: 'templateRelationDetail',
                                    funcUuid:
                                        'd1d96952dfa04247987ce61b9cee17c8',
                                    hasPermission: true,
                                    name: '消息模版关联详情'
                                },
                                {
                                    code: 'deleteTemplateRelation',
                                    funcUuid:
                                        '3e7163c45a87443fa09f4c59b93f111f',
                                    hasPermission: true,
                                    name: '删除消息模版关联'
                                },
                                {
                                    code: 'addTemplateRelation',
                                    funcUuid:
                                        '39c80a8fa9574d7e832a55ccf187b4b9',
                                    hasPermission: true,
                                    name: '新建消息模版关联'
                                },
                                {
                                    code: 'updateTemplateRelation',
                                    funcUuid:
                                        '324e3ef3b9c84c03ad94ca978d5db143',
                                    hasPermission: true,
                                    name: '编辑消息模版关联'
                                }
                            ],
                            gmtCreate: 1570599997000,
                            hasPermission: false,
                            icon: 'mt',
                            menuName: '模板关联配置',
                            menuUuid: '6a9f15664747469ebddcefe000357c0a',
                            path: '/tnt_cli_identify/message/relation',
                            sortNo: 5
                        },
                        {
                            code: 'ZB0103',
                            enName: 'Backtesting ',
                            functionList: [
                                {
                                    code: 'QueryPsReplayTaskReport',
                                    funcUuid:
                                        'b34eb714de8f4297a69b3ce9809d9c49',
                                    hasPermission: true,
                                    name: '查看回测报告'
                                },
                                {
                                    code: 'queryPsReplayTaskReportExport',
                                    funcUuid:
                                        '14b6d885cb354dcc83f6ce1196f14957',
                                    hasPermission: true,
                                    name: '导出回测报告'
                                },
                                {
                                    code: 'TerminatePsReplayTask',
                                    funcUuid:
                                        'cf48454aac5e4d7682299e0a19e87eaa',
                                    hasPermission: true,
                                    name: '终止策略集回测任务'
                                },
                                {
                                    code: 'ListPsReplayTask',
                                    funcUuid:
                                        'fbe3b486db9f46d498a3b701cda7a432',
                                    hasPermission: true,
                                    name: '查询策略集回测任务列表'
                                }
                            ],
                            gmtCreate: 1575594670000,
                            hasPermission: false,
                            icon: 'task',
                            menuName: '回测任务管理',
                            menuUuid: 'b009fcf593564932bca6f1883f2923bc',
                            path: '/index/policy/replayTask',
                            sortNo: 6
                        },
                        {
                            code: 'ZB0301',
                            enName: 'Trigger Setting',
                            functionList: [
                                {
                                    code: 'deleteUnTriggerByTime',
                                    funcUuid:
                                        '4768ee27780f4178b3832dea33e715a5',
                                    hasPermission: true,
                                    name: '删除不触发时间日程配置'
                                },
                                {
                                    code: 'deleteDealTypeImmuno',
                                    funcUuid:
                                        'd01d21fd045941c6a61b52aaa0c58814',
                                    hasPermission: true,
                                    name: '删除风险决策免疫'
                                },
                                {
                                    code: 'addUnTriggerByField',
                                    funcUuid:
                                        '3774d1867a6249709bb488fa72212514',
                                    hasPermission: true,
                                    name: '添加按字段不触发配置'
                                },
                                {
                                    code: 'updateUnTriggerByField',
                                    funcUuid:
                                        '015d8953be67454dbaad5100401e04c8',
                                    hasPermission: true,
                                    name: '修改按字段不触发配置'
                                },
                                {
                                    code: 'addUnTriggerByTime',
                                    funcUuid:
                                        '4043c4d683d1400f86b1ac616c28df6a',
                                    hasPermission: true,
                                    name: '添加按时间不触发配置'
                                },
                                {
                                    code: 'updateUnTriggerByTime',
                                    funcUuid:
                                        'f118c2e5c3ec43afa14d9781d86d09d0',
                                    hasPermission: true,
                                    name: '修改按时间不触发配置'
                                },
                                {
                                    code: 'addDealTypeImmuno',
                                    funcUuid:
                                        '77313c54b42a4dc899d8e341f20f2917',
                                    hasPermission: true,
                                    name: '添加风险决策免疫'
                                },
                                {
                                    code: 'updateDealTypeImmuno',
                                    funcUuid:
                                        'b4e6bf09d21447dabc0d56e5751531f1',
                                    hasPermission: true,
                                    name: '修改风险决策免疫'
                                },
                                {
                                    code: 'batchAddUnTriggerByTime',
                                    funcUuid:
                                        'e504704fdb064db38e789cadb721d4d8',
                                    hasPermission: true,
                                    name: '批量添加按时间不触发配置'
                                },
                                {
                                    code: 'getUnTriggerByTime',
                                    funcUuid:
                                        '5296492d1e5240fd8098f5c5a044e931',
                                    hasPermission: true,
                                    name: '按时间查看不触发配置详情'
                                },
                                {
                                    code: 'getUnTriggerByField',
                                    funcUuid:
                                        'b03c6debce4e4873985dca68ef497696',
                                    hasPermission: true,
                                    name: '按字段不触发配置详情'
                                },
                                {
                                    code: 'listUnTrigger',
                                    funcUuid:
                                        '61f61633eaba4130b51e40eed0b0d36a',
                                    hasPermission: true,
                                    name: '查看不触发列表'
                                },
                                {
                                    code: 'dealTypeImmunos',
                                    funcUuid:
                                        '3e3283fcda88458197a13246af39cf3e',
                                    hasPermission: true,
                                    name: '查看风险决策免疫列表'
                                },
                                {
                                    code: 'deleteUnTrigger',
                                    funcUuid:
                                        '2e1a76587ede4f6088c1fa65ea399caf',
                                    hasPermission: true,
                                    name: '删除风险决策触发'
                                }
                            ],
                            gmtCreate: 1575594670000,
                            hasPermission: false,
                            icon: 'setting',
                            menuName: '决策触发配置',
                            menuUuid: '99d59ede0520423d9872470cd1b8e821',
                            path: '/index/policyDeal/triggerManage',
                            sortNo: 7
                        },
                        {
                            code: 'ZB0302',
                            enName: 'Policy Decision',
                            functionList: [
                                {
                                    code: 'listPolicyDeal',
                                    funcUuid:
                                        '0f5e824fc9ad429cbde9d546592bc253',
                                    hasPermission: true,
                                    name: '查看风险决策列表'
                                },
                                {
                                    code: 'deletePolicyDeal',
                                    funcUuid:
                                        '76d3219394a14e41ac9badf46a57a15a',
                                    hasPermission: true,
                                    name: '删除风险决策'
                                },
                                {
                                    code: 'updatePolicyDeal',
                                    funcUuid:
                                        '592777cc78db49c8b71e2c0b3e4f7f08',
                                    hasPermission: true,
                                    name: '更新风险决策'
                                },
                                {
                                    code: 'addPolicyDeal',
                                    funcUuid:
                                        '73be14b6fc1245b29b895bdf2d0fe288',
                                    hasPermission: true,
                                    name: '添加风险决策'
                                }
                            ],
                            gmtCreate: 1575594670000,
                            hasPermission: false,
                            icon: 'icon',
                            menuName: '风险决策配置',
                            menuUuid: '261c9ff959374b859c228e350b58ea11',
                            path: '/index/policyDeal/dealType',
                            sortNo: 8
                        },
                        {
                            code: 'ZB0401',
                            enName: 'Approval Task',
                            functionList: [
                                {
                                    code: 'changeWorkflowApprovalStatus',
                                    funcUuid:
                                        'c486d864535348d195e2e43402da1e58',
                                    hasPermission: true,
                                    name: '决策流审批状态变更'
                                },
                                {
                                    code: 'changeWorkflowApproval',
                                    funcUuid:
                                        'dcdf9e0be40f4b9caef554be36dd49eb',
                                    hasPermission: true,
                                    name: '决策流审批详情'
                                },
                                {
                                    code: 'changeIndexApproval',
                                    funcUuid:
                                        '8d1b073182e4429881e3c434c1fb2761',
                                    hasPermission: true,
                                    name: '指标审批详情'
                                },
                                {
                                    code: 'workflowApprovalSearch',
                                    funcUuid:
                                        'd30f183c90ab495b89c4a4d036e3cad1',
                                    hasPermission: true,
                                    name: '决策流审批查询'
                                },
                                {
                                    code: 'changeIndexApprovalStatus',
                                    funcUuid:
                                        '14811cde575048d6ae65476b30b90c8d',
                                    hasPermission: true,
                                    name: '指标审批状态变更'
                                },
                                {
                                    code: 'changePolicyApproval',
                                    funcUuid:
                                        '2975a0442f654647989cdd6b7f8bfd27',
                                    hasPermission: true,
                                    name: '策略审批详情'
                                },
                                {
                                    code: 'policyApprovalSearch',
                                    funcUuid:
                                        'ce8261a4031d455eaa53fc39c9b49235',
                                    hasPermission: true,
                                    name: '策略审批查询'
                                },
                                {
                                    code: 'changePolicyApprovalStatus',
                                    funcUuid:
                                        '2e93e6bb5b374517bcbedc95e4c87034',
                                    hasPermission: true,
                                    name: '策略审批状态变更'
                                },
                                {
                                    code: 'indexApprovalSearch',
                                    funcUuid:
                                        'd38d8d31909546548486e850161b8d2d',
                                    hasPermission: true,
                                    name: '指标审批查询'
                                }
                            ],
                            gmtCreate: 1575594670000,
                            hasPermission: false,
                            icon: 'document',
                            menuName: '规则审批',
                            menuUuid: 'de14310083244cb09fa7251e6ed104de',
                            path: '/index/approval/task',
                            sortNo: 9
                        },
                        {
                            code: 'ZB0402',
                            enName: 'Approval Log',
                            functionList: [
                                {
                                    code: 'policyApprovalLogSearch',
                                    funcUuid:
                                        'f046d7c115a44cbf97f7654dd40fe25a',
                                    hasPermission: true,
                                    name: '策略审批日志查询'
                                },
                                {
                                    code: 'indexApprovalLogSearch',
                                    funcUuid:
                                        '07f6e19e29f645b698a6e4025e211910',
                                    hasPermission: true,
                                    name: '指标审批日志查询'
                                },
                                {
                                    code: 'workflowApprovalLogSearch',
                                    funcUuid:
                                        'd9c89e2e6e984320978419714da76c3b',
                                    hasPermission: true,
                                    name: '决策流审批日志查询'
                                }
                            ],
                            gmtCreate: 1575594670000,
                            hasPermission: false,
                            icon: 'document',
                            menuName: '规则审批日志',
                            menuUuid: '7f43eee507fd4bcb844192ae8e5e07cb',
                            path: '/index/approval/log',
                            sortNo: 10
                        },
                        {
                            code: 'ZB0105',
                            enName: 'PUB POLICY',
                            functionList: [
                                {
                                    code: 'PubPolicyDetail',
                                    funcUuid:
                                        '371b6381540a44d19ed6f4fc61b44f8a',
                                    hasPermission: true,
                                    name: '编辑区公共策略详情'
                                },
                                {
                                    code: 'PublicPolicyImport',
                                    funcUuid:
                                        '1bf4c3d6789c4232baf41054048591b8',
                                    hasPermission: true,
                                    name: '公共策略导入'
                                },
                                {
                                    code: 'SubmitPubPolicy',
                                    funcUuid:
                                        'e54b13c6230041d4a6e52f34d480a2af',
                                    hasPermission: true,
                                    name: '提交公共策略版本'
                                },
                                {
                                    code: 'PolicyInfoAndRule',
                                    funcUuid:
                                        '1386e650867743edb50dc5bb2172129b',
                                    hasPermission: true,
                                    name: '策略规则详情'
                                },
                                {
                                    code: 'OfflinePubPolicy',
                                    funcUuid:
                                        'dbd6b7466bc14cb9a5262061a49f516b',
                                    hasPermission: true,
                                    name: '公共策略下线'
                                },
                                {
                                    code: 'PubPolicyListOnline',
                                    funcUuid:
                                        '4bd535e8147e46ec9dd0d928bbe9afd0',
                                    hasPermission: true,
                                    name: '运行区公共策略列表'
                                },
                                {
                                    code: 'SwitchPubPolicyVersion',
                                    funcUuid:
                                        '72d5574d4cea474a9abb0aa867c27dc9',
                                    hasPermission: true,
                                    name: '切换公共策略版本'
                                },
                                {
                                    code: 'OnlinePubPolicyDetail',
                                    funcUuid:
                                        'd01a397a998f43369e2747c1dc96d840',
                                    hasPermission: true,
                                    name: '运行区公共策略详情'
                                },
                                {
                                    code: 'PublicPolicyExport',
                                    funcUuid:
                                        'c4addfc1c7e14778bebdef2900d55087',
                                    hasPermission: true,
                                    name: '公共策略导出'
                                },
                                {
                                    code: 'PubPolicyList',
                                    funcUuid:
                                        '85faf59fd5f64487940bd935f49cfe9d',
                                    hasPermission: true,
                                    name: '编辑区公共策略列表'
                                },
                                {
                                    code: 'UpdatePubPolicy',
                                    funcUuid:
                                        'd97bdd47ad1b45d28b3e09bab881e7ba',
                                    hasPermission: true,
                                    name: '更新公共策略'
                                },
                                {
                                    code: 'PubPolicyHistory',
                                    funcUuid:
                                        '4bed149c93ce4673b45fcec4bef7a20d',
                                    hasPermission: true,
                                    name: '公共策略历史版本'
                                },
                                {
                                    code: 'AddPublicPolicy',
                                    funcUuid:
                                        'ddcd80e322de42d4a831ca0277d204e2',
                                    hasPermission: true,
                                    name: '新增公共策略'
                                },
                                {
                                    code: 'PubPolicyFlowRef',
                                    funcUuid:
                                        'd9d63b42b6314032a4212917b21b2171',
                                    hasPermission: true,
                                    name: '公共策略被规则流引用'
                                },
                                {
                                    code: 'DelPubPolicy',
                                    funcUuid:
                                        '839c0f93c2564aedbcccff0c23c79dbb',
                                    hasPermission: true,
                                    name: '删除公共策略'
                                }
                            ],
                            gmtCreate: 1577265874000,
                            hasPermission: false,
                            icon: 'entry',
                            menuName: '公共策略',
                            menuUuid: 'b1f88e80460a4c60886bc82d893f60b1',
                            path: '/index/policy/publicPolicyList',
                            sortNo: 11
                        }
                    ],
                    code: 'TR02',
                    enName: 'Policy',
                    gmtCreate: 1559028077000,
                    groupIcon: 'analysis',
                    groupName: '决策中心',
                    sortNo: 2
                },
                {
                    children: [
                        {
                            code: 'QX0101',
                            enName: 'Organization',
                            functionList: [
                                {
                                    code: 'viewOrg',
                                    funcUuid:
                                        '73417d7f18744d1fb9bc9bcc7bb2b8db',
                                    hasPermission: true,
                                    name: '查看机构'
                                },
                                {
                                    code: 'modifyPermission',
                                    funcUuid:
                                        'a2223323f262484c8e888daffebe2354',
                                    hasPermission: true,
                                    name: '关联菜单功能'
                                },
                                {
                                    code: 'deleteOrg',
                                    funcUuid:
                                        'd6e9755013984b6385edf3964c4f82da',
                                    hasPermission: true,
                                    name: '删除机构'
                                },
                                {
                                    code: 'addOrg',
                                    funcUuid:
                                        'da9112235ebf4a9180c0d67f4157fea8',
                                    hasPermission: true,
                                    name: '添加机构'
                                },
                                {
                                    code: 'modifyOrg',
                                    funcUuid:
                                        'cd538fffdd6a486d94c39eb33a30c68f',
                                    hasPermission: true,
                                    name: '编辑机构'
                                },
                                {
                                    code: 'viewPermission',
                                    funcUuid:
                                        '32ab93828f79453f92d3a7fd41587248',
                                    hasPermission: true,
                                    name: '查看菜单功能'
                                }
                            ],
                            gmtCreate: 1534230725000,
                            hasPermission: false,
                            icon: 'org',
                            menuName: '机构管理\t',
                            menuUuid: 'c9fdde8a5a9346a097bd6e4005e68499',
                            path: '/bridge/permission/organization',
                            sortNo: 1
                        },
                        {
                            code: 'QX0102',
                            enName: 'Role',
                            functionList: [
                                {
                                    code: 'deleteRole',
                                    funcUuid:
                                        '6669bd531a8e42d5ad4be31d0b09d4d9',
                                    hasPermission: true,
                                    name: '删除角色'
                                },
                                {
                                    code: 'modifyRole',
                                    funcUuid:
                                        '6f6885a3e3014f5e89034b3722c5b03d',
                                    hasPermission: true,
                                    name: '编辑角色'
                                },
                                {
                                    code: 'modifyPermission',
                                    funcUuid:
                                        'd1edfbd5f17b4fa29156d71ed1958bc9',
                                    hasPermission: true,
                                    name: '关联菜单功能'
                                },
                                {
                                    code: 'viewRole',
                                    funcUuid:
                                        '5be9135e2f0442ff822701578292b157',
                                    hasPermission: true,
                                    name: '查看角色'
                                },
                                {
                                    code: 'addRole',
                                    funcUuid:
                                        '7d35fdcc631642db9b482f91a378e28e',
                                    hasPermission: true,
                                    name: '添加角色'
                                },
                                {
                                    code: 'viewPermission',
                                    funcUuid:
                                        '8530e31be3914b48bee9fe535affe32e',
                                    hasPermission: true,
                                    name: '查看菜单功能'
                                }
                            ],
                            gmtCreate: 1534230771000,
                            hasPermission: false,
                            icon: 'role',
                            menuName: '角色管理',
                            menuUuid: '35b37b18ee00435d8358c6bcd6b2a472',
                            path: '/bridge/permission/role',
                            sortNo: 2
                        },
                        {
                            code: 'QX0103',
                            enName: 'User',
                            functionList: [
                                {
                                    code: 'userLockUnlock',
                                    funcUuid:
                                        'f37157ff100b4ae989d094f002dc117b',
                                    hasPermission: true,
                                    name: '启用禁用用户'
                                },
                                {
                                    code: 'deleteUser',
                                    funcUuid:
                                        '3cd9b8f3a4a64b7eb0c003903dee0418',
                                    hasPermission: true,
                                    name: '删除用户'
                                },
                                {
                                    code: 'resetPassword',
                                    funcUuid:
                                        '9a4d7be750384c3292d99719a794d25c',
                                    hasPermission: true,
                                    name: '重置密码'
                                },
                                {
                                    code: 'addUser',
                                    funcUuid:
                                        '4c9d30f2fb1f4205af323b3f63bf1fdb',
                                    hasPermission: true,
                                    name: '添加用户'
                                },
                                {
                                    code: 'modifyUser',
                                    funcUuid:
                                        '83062bcddf834afebc565a416879fd9c',
                                    hasPermission: true,
                                    name: '编辑用户'
                                },
                                {
                                    code: 'searchUser',
                                    funcUuid:
                                        'f10ba7db22cf4a5d9e5881ba8e93d9f4',
                                    hasPermission: true,
                                    name: '查看搜索用户'
                                }
                            ],
                            gmtCreate: 1534230801000,
                            hasPermission: false,
                            icon: 'user-group',
                            menuName: '用户管理',
                            menuUuid: '1b8ec8d5fc4e4678ae2d49093bdf498a',
                            path: '/bridge/permission/user',
                            sortNo: 3
                        }
                    ],
                    code: 'permission',
                    enName: 'Authority',
                    gmtCreate: 1559028586000,
                    groupIcon: 'user',
                    groupName: '权限管理',
                    sortNo: 13
                },
                {
                    children: [
                        {
                            code: 'JY0901',
                            enName: 'Audit Config',
                            functionList: [
                                {
                                    code: 'saveAppConfig',
                                    funcUuid:
                                        '7c6ed9dd3bfa4d1590f7ed8fa3e15aae',
                                    hasPermission: true,
                                    name: '保存配置'
                                },
                                {
                                    code: 'getAppConfigData',
                                    funcUuid:
                                        'b4a3f692f9ce428a849e9e8aea3b18f2',
                                    hasPermission: true,
                                    name: '获取应用配置数据'
                                }
                            ],
                            gmtCreate: 1570599997000,
                            hasPermission: false,
                            icon: 'check',
                            menuName: '事件审核配置',
                            menuUuid: '8d0ebb56ccc249e2bd30463e83f3d2ab',
                            path: '/tnt_cli_identify/systemConfig/auditConfig',
                            sortNo: 1
                        },
                        {
                            code: 'systemSetting',
                            enName: 'systemSetting',
                            functionList: [
                                {
                                    code: 'decisionToolApprovalConfig',
                                    funcUuid:
                                        'f3ae6590114c48c7aa17735ef1be5839',
                                    hasPermission: true,
                                    name: '决策工具审批开关'
                                },
                                {
                                    code: 'modelApprovalConfig',
                                    funcUuid:
                                        'e66b8dc0fa7d4209b057f331012cf2c2',
                                    hasPermission: true,
                                    name: '模型审批开关'
                                },
                                {
                                    code: 'dataApprovalConfig',
                                    funcUuid:
                                        '5de34c2da6f84566b655df3486ce11f7',
                                    hasPermission: true,
                                    name: '数据预处理审批开关'
                                },
                                {
                                    code: 'systemConfig',
                                    funcUuid:
                                        '1e94e803764241859dcb3c692180eff5',
                                    hasPermission: true,
                                    name: '系统字段查询'
                                },
                                {
                                    code: 'modifySystemConfig',
                                    funcUuid:
                                        '0740572c02174fc69e7094eeeea55cf9',
                                    hasPermission: true,
                                    name: '系统配置修改'
                                }
                            ],
                            gmtCreate: 1570602557000,
                            hasPermission: false,
                            icon: 'systemSetting',
                            menuName: '模型审核配置',
                            menuUuid: '5bbe731f46b84fa1a984c07f229308ce',
                            path: '/model/systemSetting',
                            sortNo: 2
                        },
                        {
                            code: 'QX0401',
                            enName: 'Codebook Setting',
                            functionList: [
                                {
                                    code: 'modifyDictionary',
                                    funcUuid:
                                        'c8d3bcb7c94f48379074a76e9e2f018b',
                                    hasPermission: true,
                                    name: '修改字典配置'
                                },
                                {
                                    code: 'deleteDictionary',
                                    funcUuid:
                                        '89cbdadf4a9b4a5db6e964f4c2d4ab73',
                                    hasPermission: true,
                                    name: '删除字典配置'
                                },
                                {
                                    code: 'addDictionary',
                                    funcUuid:
                                        '010534ab67474ceab11b4ad2e0d4ae37',
                                    hasPermission: true,
                                    name: '新建字典配置'
                                },
                                {
                                    code: 'viewDictionary',
                                    funcUuid:
                                        '4f447a02e4fd425c9a73aeaf3b9adcbb',
                                    hasPermission: true,
                                    name: '查看字典配置'
                                }
                            ],
                            gmtCreate: 1555644913000,
                            hasPermission: false,
                            icon: 'icon',
                            menuName: '字典配置',
                            menuUuid: '03f6d36177da420c8d14c2a180f802e1',
                            path: '/bridge/dictionary',
                            sortNo: 3
                        },
                        {
                            code: 'QX0402',
                            enName: 'Parameter Setting',
                            functionList: [
                                {
                                    code: 'modifySystemConfig',
                                    funcUuid:
                                        'c8a08d8731f0477a9f5b087ac5f78c94',
                                    hasPermission: true,
                                    name: '修改配置'
                                },
                                {
                                    code: 'viewSystemConfigDetail',
                                    funcUuid:
                                        'dd3b21a03e6a4ebfbf0a776c9a46355e',
                                    hasPermission: true,
                                    name: '查询配置详情'
                                },
                                {
                                    code: 'deleteSystemConfig',
                                    funcUuid:
                                        'e5fec7905ba14f7da1ff9043ccfd9322',
                                    hasPermission: true,
                                    name: '删除配置'
                                },
                                {
                                    code: 'getSystemConfigList',
                                    funcUuid:
                                        'fa54fe2c7ec147a28d5eb8d6c1dca39e',
                                    hasPermission: true,
                                    name: '查询配置列表'
                                },
                                {
                                    code: 'addSystemConfig',
                                    funcUuid:
                                        '434fbfc3c38242c0bd3c45964bb9c037',
                                    hasPermission: true,
                                    name: '新建配置'
                                }
                            ],
                            gmtCreate: 1555644950000,
                            hasPermission: false,
                            icon: 'setting',
                            menuName: '参数配置',
                            menuUuid: '5edb5d2dd445401fb1b299140c311966',
                            path: '/bridge/parameter',
                            sortNo: 4
                        },
                        {
                            code: 'QX0301',
                            enName: 'Operation Log',
                            functionList: [
                                {
                                    code: 'viewOperationLog',
                                    funcUuid:
                                        'acfb53d0f3ff4d469d43db232aa15c43',
                                    hasPermission: true,
                                    name: '查看操作日志'
                                }
                            ],
                            gmtCreate: 1555644391000,
                            hasPermission: false,
                            icon: 'log',
                            menuName: '操作日志',
                            menuUuid: '592795198585482ebb6c97037f7aa96f',
                            path: '/bridge/operatorLog',
                            sortNo: 5
                        }
                    ],
                    code: 'systemManage',
                    enName: 'System Manage',
                    gmtCreate: 1559028626000,
                    groupIcon: 'model',
                    groupName: '系统管理',
                    sortNo: 14
                },
                {
                    children: [
                        {
                            code: 'QX0201',
                            enName: 'Function Register',
                            functionList: [
                                {
                                    code: 'addMenu',
                                    funcUuid:
                                        'ee55c48c50bb435fa8e531e4e48e46ba',
                                    hasPermission: true,
                                    name: '新增系统分组菜单'
                                },
                                {
                                    code: 'deleteFunction',
                                    funcUuid:
                                        'b7d9661260614bc18c3bbb605d845c91',
                                    hasPermission: true,
                                    name: '删除功能'
                                },
                                {
                                    code: 'addFunction',
                                    funcUuid:
                                        'fce2866b15b04430b260b4298169b253',
                                    hasPermission: true,
                                    name: '新增功能'
                                },
                                {
                                    code: 'deleteMenu',
                                    funcUuid:
                                        '524f67fc502a4086bbe7fe787029ab83',
                                    hasPermission: true,
                                    name: '删除系统分组菜单'
                                },
                                {
                                    code: 'modifyMenu',
                                    funcUuid:
                                        '3d44a0607ea6490786462779d191d55d',
                                    hasPermission: true,
                                    name: '修改系统分组菜单'
                                },
                                {
                                    code: 'modifyFunction',
                                    funcUuid:
                                        '7f365769858b42b3a81d727876d5c34c',
                                    hasPermission: true,
                                    name: '修改功能'
                                }
                            ],
                            gmtCreate: 1551698044000,
                            hasPermission: false,
                            icon: 'list',
                            menuName: '功能注册',
                            menuUuid: '320724fdc0fa45d0834d2023822e7106',
                            path: '/bridge/system/register',
                            sortNo: 1
                        },
                        {
                            code: 'QX0202',
                            enName: 'Solution',
                            functionList: [
                                {
                                    code: 'saveSolutionMenu',
                                    funcUuid:
                                        '9ec540aa02ee4618ad4b4d25848f67c7',
                                    hasPermission: true,
                                    name: '保存方案菜单修改'
                                },
                                {
                                    code: 'modifySolutionGroup',
                                    funcUuid:
                                        '4557f7a065634c5f89305998e69d0606',
                                    hasPermission: true,
                                    name: '修改解决方案分组'
                                },
                                {
                                    code: 'addSolutionGroup',
                                    funcUuid:
                                        'fc643bdf11c4434a8223c147c9197e65',
                                    hasPermission: true,
                                    name: '添加解决方案分组'
                                },
                                {
                                    code: 'deleteSolutionGroup',
                                    funcUuid:
                                        '0e70dda12df74c848a12748d68a30ca3',
                                    hasPermission: true,
                                    name: '删除解决方案分组'
                                }
                            ],
                            gmtCreate: 1551698678000,
                            hasPermission: false,
                            icon: 'list',
                            menuName: '解决方案',
                            menuUuid: 'beb94642190c499daeb57066b32deea6',
                            path: '/bridge/system/solution',
                            sortNo: 2
                        },
                        {
                            code: 'QX0203',
                            enName: 'License Admin',
                            functionList: [
                                {
                                    code: 'importSolution',
                                    funcUuid:
                                        'a78900bc05494215be5dd408de164dd6',
                                    hasPermission: true,
                                    name: '导入解决方案'
                                },
                                {
                                    code: 'modifyLicense',
                                    funcUuid:
                                        '336dbb0ea50b49eb9af932bfd020570c',
                                    hasPermission: true,
                                    name: '修改license'
                                }
                            ],
                            gmtCreate: 1551698873000,
                            hasPermission: false,
                            icon: 'list',
                            menuName: 'License管理',
                            menuUuid: 'e8497569b7e0436e9627cddfe227a2ce',
                            path: '/bridge/system/startup',
                            sortNo: 3
                        }
                    ],
                    code: 'QX0203',
                    enName: 'System Config',
                    gmtCreate: 1559028652000,
                    groupIcon: 'setting',
                    groupName: '初始设置',
                    sortNo: 16
                }
            ],
            name: 'salaxy2',
            user: {
                account: 'admin',
                appName:
                    '["test12","auto","sfsdfd","interface_auto","wbank","jy2","jy","tet","testhuigui"]',
                avatar: 'male1',
                expiration: 1924963199000,
                firstLogin: '1',
                gender: 0,
                gmtCreate: 1551771456000,
                gmtModified: 1581471430000,
                lang: 'cn',
                layout: 'default',
                orgUuid: 'a8202aea546f48979754bdd45c471b08',
                roleUuids: '["ee8dbc99831b4a9cb17578b51bbb09e0"]',
                salt: 'd75e6a1d7bca4bc392f2553d730e981d',
                simplified: 1,
                status: 0,
                theme: 'default',
                tokenMD5: '',
                tryDate: 1581914839000,
                tryTime: 1,
                updateBy: 'admin',
                updatePwdTime: 1582008139000,
                userName: '超级管理员',
                uuid: 'c693e0ec0a2e4bf8b71eef8152d88a29'
            }
        })
    );
};
