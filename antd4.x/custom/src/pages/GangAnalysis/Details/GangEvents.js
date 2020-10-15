import { useState } from 'react';
import { ExportOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { parse, stringify } from 'query-string';
import { QueryListScene } from 'tntd';
import { prettyJSON } from '@/utils';
import service from './service';

const { Toolbar, QueryList } = QueryListScene;

export default ({ gangId, partnerCode }) => {
    const [columns, setColumns] = useState([]);
    const query = ({ pageSize, current, ...params } = {}) => {
        return service.queryRiskEvents({
            ...params,
            ...parse(window.location.search),
            partnerCode,
            gangId,
            page: current || 1,
            pageSize: pageSize || 20
        }).then(data => {
            const {
                page,
                pageSize,
                total,
                chart: {
                    headers = [],
                    rowDatas = []
                } = {} 
            } = data;
            const widthMap = {
                riskScore: 80,
                catchWay: 100,
                riskCause: 120,
                gangId: 170
            };
            setColumns(headers.map(({ key, value, width }) => ({
                dataIndex: key,
                title: value,
                width: width || widthMap[key],
                ...(key === 'attrInfo' ? {
                    ellipsis: true,
                    render: val => (
                        <Tooltip title={<pre>{prettyJSON(val)}</pre>} placement="topLeft">
                            <span style={{ cursor: 'pointer' }}>
                                {val}
                            </span>
                        </Tooltip>
                    )
                } : {})
            })));

            return {
                current: page,
                pageSize,
                total,
                data: rowDatas 
            };
        });
    };
    const downloadParams = {
        ...parse(window.location.search),
        gangId,
        partnerCode
    };

    return (
        <QueryListScene query={query} className="gang-events">
            <Toolbar className="gang-events-toolbar">
                <h4>风险列表</h4>
                <a href={`${service.riskEventDownload.URL.href}?${stringify(downloadParams)}`} target="__blank">
                    <ExportOutlined />
                    导出Excel
                </a>
            </Toolbar>
            <QueryList columns={columns} />
        </QueryListScene>
    );
};
