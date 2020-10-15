import { useState, useEffect } from 'react';
import { Drawer, Card, Table, Timeline, Icon } from 'antd';
import { get } from 'lodash';
import service from './service';

export default ({ visible, user, partnerCode, close }) => {
    const [detail, setDetail] = useState({});

    useEffect(() => {
        if (visible) {
            service.queryUserDetail({
                userId: get(user, 'userId'),
                partnerCode
            }).then(data => {
                setDetail(data);
            });
        }
    }, [visible]);

    const TimelineGroup = () => {
        const items = (get(detail, 'charts') || []).reduce((acc, cur) => {
            acc.push({
                label: get(cur, 'headers.0.value'),
                type: 'date' 
            });
            acc = [
                ...acc,
                ...(cur.rowDatas || []).map(({ date: time }) => ({ label: time })) 
            ];
            return acc;
        }, []);
        const DotIcon = ({ type = 'time' }) => {
            return <Icon type={type === 'time' ? 'clock-circle-o' : 'calendar'} />;
        };

        return (
            <Timeline mode="right">
                {
                    items.map(({ label, type }) => (
                        <Timeline.Item
                            dot={<DotIcon type={type} />}
                            className={type}
                        >
                            {label}
                        </Timeline.Item>
                    ))
                }
                <Timeline.Item dot={null} />
            </Timeline>
        );
    };
    const TableGroup = () => {
        const dataSource = (get(detail, 'charts') || []).reduce((acc, chart) => {
            acc = [
                ...acc,
                ...(get(chart, 'rowDatas') || [])
            ];
            acc.push({ emptyRow: true });
            return acc;
        }, []);

        return (
            <Table
                size="small"
                bordered={false}
                pagination={false}
                columns={(get(detail, 'charts.0.headers') || []).map(item => ({
                    dataIndex: item.key,
                    title: item.value
                })).slice(1)}
                dataSource={dataSource}
                rowClassName={
                    record => record.emptyRow ? 'empty-row' : ''
                }
            />
        );
    };

    return (
        <Drawer
            visible={visible}
            title={`用户详情[${get(user, 'userId')}]`}
            onClose={close}
            desctryOnClose
            width="60%"
            className="user-details-drawer"
        >
            <Card title="用户风险原因" size="small">
                {
                    (detail.riskCauses || []).map((reason, index) => (
                        <p>{index + 1}. {reason}</p>
                    ))
                }
            </Card>
            <Card title="风险事件记录" size="small">
                <p>显示最新50条数据</p>
                <div className="risk-event-records-timeline">
                    <TimelineGroup />
                    <TableGroup />
                </div>
            </Card>
        </Drawer>
    );
};
