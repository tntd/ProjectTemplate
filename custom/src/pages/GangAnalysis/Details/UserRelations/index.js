import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { parse } from 'query-string';
import Chart from '@/components/Chart';
import UserListModal from './UserListModal';
import service from '../service';

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

export default ({ gangId, partnerCode }) => {
    const [graphData, setGraphData] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedNode, setSelectedNode] = useState(null);
    const summaryItems = [
        { label: '团伙ID:', value: graphData.gangId || '-' },
        { label: '风险用户数:', value: graphData.riskUserCount || '-' },
        { label: '团伙风险分:', value: graphData.gangRiskScore || '-' }
    ];
    const onNodeClick = ({ data: node }) => {
        setSelectedNode(node);
        setModalVisible(true);
    };
    const nodesMap = (graphData.nodes || []).reduce((acc, node) => {
        acc[node.id] = node;
        return acc;
    }, {});
    const setRelatedNodes = (nodes = [], edges = []) => {
        nodes.forEach(node => {
            node.relatedNodes = edges.reduce((acc, edge) => {
                if (edge.source === node.id) {
                    acc.push(edge.target);
                }
                if (edge.target === node.id) {
                    acc.push(edge.source);
                }

                return acc;
            }, []);
            node.degree = node.relatedNodes.length;
        });

        return nodes.sort((a, b) => b.degree - a.degree);
    };

    graphData.nodes = setRelatedNodes(graphData.nodes, graphData.edges);

    const getNodesCategories = (nodes = []) => {
        const visitNodesMap = {};
        const categories = [];

        nodes.forEach(node => {
            if (!visitNodesMap[node.id]) {
                categories.push({ name: node.id });
                visitNodesMap[node.id] = true;
                node.category = categories.length - 1;
                node.relatedNodes.forEach(id => {
                    nodesMap[id].category = categories.length - 1;
                    visitNodesMap[id] = true;
                });
            }
        });

        return { categories, nodes };
    };
    const { nodes, categories } = getNodesCategories(graphData.nodes, graphData.edges);

    useEffect(() => {
        service.queryUserRelationGraph({
            ...parse(window.location.search),
            gangId,
            partnerCode
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
                <a onClick={() => setModalVisible(true)}>用户列表</a>
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
                        categories,
                        nodes: (nodes || []).map(node => ({
                            id: node.id,
                            name: node.id,
                            category: node.category,
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
                onNodeClick={onNodeClick}
            />
            <UserListModal
                visible={modalVisible}
                gangId={gangId}
                partnerCode={partnerCode}
                user={selectedNode}
                close={() => {
                    setModalVisible(false);
                    setSelectedNode(null);
                }}
            />
        </section>
    );
};
