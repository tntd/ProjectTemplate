import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Chart from '@/components/Chart';
import service from '../service';

export default ({ summary = {}, data }) => {
    const summaryItems = [
        { label: '团伙ID:', value: summary.gangId || '-' },
        { label: '风险用户数:', value: summary.riskUserCount || '-' },
        { label: '团伙风险分:', value: summary.gangRiskScore || '-' }
    ];
    const Header = styled.header`
        display: flex;
        padding: 10px 20px;
        line-height: 32px;
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            flex: 1;
            li {
                display: inline-block;
                margin-right: 120px;
                color: #333;
                label {
                    color: #999;
                    margin-right: 10px;
                }
                span {
                    font-weight: 500;
                }
            }
        }
    `;
    const [graphData, setGraphData] = useState({});

    useEffect(() => {
        service.queryUserRelationGraph({

        }).then(data => {
            setGraphData(data);
        });
    }, []);

    return (
        <section className="user-relations">
            <Header>
                <ul>
                    {
                        summaryItems.map(({ label, value }) => (
                            <li>
                                <label>{label}</label>
                                <span>{value}</span>
                            </li>
                        ))
                    }
                </ul>
                <a>用户列表</a>
            </Header>
            <Chart
                type="graph"
                data={graphData}
                option={{
                    series: [{
                        name: '用户关联图',
                        type: 'graph',
                        layout: 'force',
                        roam: true,
                        nodes: (graphData.nodes || []).map(node => ({
                            id: node.id,
                            name: node.id,
                            symbolSize: 30,
                            x: null,
                            y: null,
                            draggable: true
                        })),
                        edges: (graphData.edges || []).map(edge => ({
                            ...edge,
                            lineStyle: {
                                width: 2
                            }
                        })),
                        force: {
                            repulsion: 200
                        }
                    }]
                }}
            />
        </section>
    );
};
