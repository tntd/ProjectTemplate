
import { InfoCircleOutlined } from '@ant-design/icons';
import { Card, Table, Badge, Popover } from 'antd';
import { get } from 'lodash';
import { Link } from 'dva/router';
import { stringify } from 'query-string';
import { routerPrefix } from '@/constants';
import Chart from '@/components/Chart';
import { setYAxisInterval } from './utils';

const { Column } = Table;

const Overview = ({ data = {} }) => {
    const items = [
        [
            { name: '事件总数', key: 'eventCount' },
            {
                name: '风险事件数',
                key: 'riskEventCount',
                rateKey: 'riskEventPercent'
            }
        ],
        [
            { name: '新发现风险事件', key: 'riskEventGainCount', tip: '相较原有风险识别方法（策略规则），算法多识别的风险事件数' },
            { name: '风险事件增益率', key: 'riskEventGainPercent', tip: '算法比原有风险识别方法（策略规则）多识别的风险事件数与原有风险识别方法识别风险事件数的比值' },
        ],
        [
            { name: '用户总数', key: 'userCount' },
            { name: '风险用户数', key: 'riskUserCount', rateKey: 'riskUserPercent' }
        ],
        [
            { name: '新发现用户', key: 'riskUserGainCount', tip: '相较原有风险识别方法（策略规则），算法多识别的风险事件数' },
            { name: '风险用户增益率', key: 'riskUserGainPercent', tip: '算法比原有风险识别方法（策略规则）多识别的风险用户数与原有风险识别方法识别风险用户数的比值' }
        ],
        // [
        //     { name: '风险团伙数', key: 'riskGangCount' }
        // ]
    ];

    return (
        <ul className="dashboard-overview-summary">
            {
                items.map(subItems => (
                    <li>
                        {
                            subItems.map(({ key, name, tip, rateKey }) => (
                                <div>
                                    <label>
                                        {name}
                                        {
                                            tip && (
                                                <Popover content={tip} trigger="hover">
                                                    <InfoCircleOutlined />
                                                </Popover>
                                            )
                                        }:
                                    </label>
                                    <span>
                                        {data[key] || '-'}{rateKey ? `(${data[rateKey] || '-'})` : ''}
                                    </span>
                                </div>
                            ))
                        }
                    </li>
                ))
            }
        </ul>
    );
};

const Top5RiskGang = ({ data = [], formActions = {} }) => {
    const { dateRange: [startTime = '', endTime = ''] = [], ...params } = formActions.getFormState().values;
    params.startTime = startTime.replace(/\-/g, '');
    params.endTime = endTime.replace(/\-/g, '');

    const Title = () => (
        <div className="top5-risk-gangs-title">
            <h4>TOP5风险团伙</h4>
            <Link to={`${routerPrefix}/gangAnalysis?${stringify(params)}`}>更多</Link>
        </div>
    );

    return (
        <Table
            title={props => <Title {...props} />}
            dataSource={data}
            pagination={false}
            bordered={false}
            rowKey="gangId"
            className="top5-risk-gangs"
        >
            <Column
                title=""
                dataIndex="index"
                width={40}
                render={
                    (val, record, index) => (
                        <Badge count={index + 1} style={{ backgroundColor: '#333', opacity: index > 2 ? .25 : 1 }} />
                    )
                }
            />
            <Column title="团伙ID" dataIndex="gangId" />
            <Column
                title={params.type === 'user' ? '用户数' : '事件数'}
                dataIndex={params.type === 'user' ? 'userCount' : 'eventCount'}
            />
            <Column
                title=""
                dataIndex="gangId"
                width={60}
                render={(gangId, record) => (
                    <Link to={`${routerPrefix}/gangAnalysis/${gangId}?${stringify(params)}`}>查看</Link>
                )}
            />
        </Table>
    );
};

export default ({ store, formActions }) => {
    const {
        overview,
        riskGain,
        riskScore,
        riskCause,
        riskGang,
        riskGangList
    } = store;

    return (
        <div className="dashboard-overview-charts">
            <Overview data={overview} />
            <Card title="风险增益趋势">
                <Chart
                    data={riskGain}
                    formatOption={
                        option => setYAxisInterval({
                            ...option,
                            legend: {
                                data: (option.series || []).map(({ name }) => name)
                            },
                            tooltip: {
                                ...option.tooltip,
                                formatter: params => params.reduce(
                                    (acc, cur, index) => {
                                        let val = cur.value;
                                        val = index === 2 ? `${val}%` : new Intl.NumberFormat().format(val);
                                        acc += cur.seriesName + '：' + val + '<br/>';
                                        return acc;
                                    },
                                    params[0].name + '<br/>'
                                )
                            },
                            series: (option.series || []).map(item => ({
                                ...item,
                                ...(item.yAxisIndex === 0 ? { stack: 'area' } : {}),
                                areaStyle: item.yAxisIndex === 0 ? {} : null
                            }))
                        })
                    }
                />
            </Card>
            <Card title="风险团伙趋势" className="risk-gang-card">
                <Chart
                    type="bar"
                    data={riskGang}
                    formatOption={option => setYAxisInterval({
                        ...option,
                        xAxis: {
                            ...option.xAxis,
                            boundaryGap: true
                        }
                    })}
                />
                <Top5RiskGang data={riskGangList} formActions={formActions} />
            </Card>
            <div className="charts-block">
                <Card title="风险分分布">
                    <Chart
                        type="bar"
                        data={riskScore}
                        option={{
                            xAxis: {
                                type: 'value',
                            },
                            yAxis: {
                                type: 'category',
                                data: get(riskScore, 'x')
                            }
                        }}
                    />
                </Card>
                <Card title="风险分布原因">
                    <Chart
                        type="pie"
                        data={riskCause}
                        option={{
                            legend: {
                                orient: 'vertical',
                                x: 'right',
                                data: get(riskCause, 'datas', []).map(({ name }) => name)
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: '{a} <br/>{b}: {c} ({d}%)'
                            },
                            series: [{
                                name: get(riskCause, 'title', ''),
                                type: 'pie',
                                radius: ['40%', '60%'],
                                data: get(riskCause, 'datas', [])
                            }]
                        }}
                    />
                </Card>
            </div>
        </div>
    );
}
