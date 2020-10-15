import { useState } from 'react';
import { Drawer } from 'antd';
import { get } from 'lodash';
import { parse } from 'query-string';
import { QueryListScene } from 'tntd';
import service from '../service';

const { QueryList } = QueryListScene;

const UserList = ({ gangId, userId, partnerCode }) => {
    const [columns, setColumns] = useState([]);
    const query = ({ pageSize, current, ...params } = {}) => {
        return service.queryUsers({
            ...parse(window.location.search),
            ...params,
            gangId,
            partnerCode,
            ...(userId ? { userId } : {}),
            page: current || 1,
            pageSize: pageSize || 10
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
            setColumns(headers.map(({ key, value }) => ({
                dataIndex: key,
                title: value
            })));

            return {
                current: page,
                pageSize,
                total,
                data: rowDatas 
            };
        });
    };

    return (
        <QueryListScene query={query} className="user-list-modal-qls">
            <QueryList
                rowKey="userId"
                columns={columns}
                rowClassName={
                    record => record.userId === userId ? 'active' : ''
                }
            />
        </QueryListScene>
    );
};

export default ({ visible, gangId, user, partnerCode, close }) => {
    return (
        <Drawer
            visible={visible}
            title={`用户列表${user ? `[${user.id}]` : ''}`}
            onClose={close}
            destroyOnClose
            width="60%"
        >
            <UserList gangId={gangId} userId={get(user, 'id')} partnerCode={partnerCode} />
        </Drawer>
    );
};
