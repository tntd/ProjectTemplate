import { useState } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { CloudDownloadOutlined, CloudUploadOutlined, SettingOutlined } from '@ant-design/icons';
import { Divider, Button, Popconfirm, Tooltip } from 'antd';
import { QueryListScene } from 'tntd';
import EditModal from './Modals/Edit';
import service from './service';

const { QueryForm, Toolbar, QueryList, Field, createActions } = QueryListScene;
const actions = createActions();

const ListPage = ({ currentApp, location }) => {
    const [editItem, setEditItem] = useState(null);
    const onCreate = () => setEditItem({});
    const onEdit = record => setEditItem(record);

    const ColumnActions = props => {
        const { record } = props;
        const onRemove = async () => {
            await service.remove({
                id: record.id
            });
            actions.search();
        };

        return (
            <span>
                <a onClick={() => onEdit(record)}>配置</a>
                <Divider type="vertical" />
                <Link to={`${location.pathname}/detail?id=${record.id}`}>详情页</Link>
                <Divider type="vertical" />
                <Popconfirm
                    title="删除确认"
                    placement="topRight"
                    onConfirm={onRemove}
                    okText="确认"
                    cancelText="取消"
                >
                    <a>删除</a>
                </Popconfirm>
            </span>
        );
    };
    const columns = [
        {
            dataIndex: 'name',
            title: '项目名称',
            sorter: true,
            width: 200,
            fixed: 'left',
            render: (name, record) => (
                <Tooltip placement="bottomLeft" title={record.description}>
                    {name}
                </Tooltip>
            )
        },
        {
            dataIndex: 'maintainer',
            title: '负责人',
            width: 160,
            sorter: true
        },
        {
            dataIndex: 'createdTime',
            title: '创建时间',
            width: 220,
            sorter: true
        },
        {
            dataIndex: 'members',
            title: '项目成员',
            className: 'word-break',
            render: members => (members || []).join(',')
        },
        {
            dataIndex: 'opertaions',
            title: '操作',
            width: 180,
            fixed: 'right',
            render: (val, record) => <ColumnActions record={record} />
        }
    ];
    const query = (params = {}) => {
        const { current: curPage = 20, createTimeRange, sorter, ...rest } = params;

        if (createTimeRange && createTimeRange.length) {
            rest.createTimeRange = JSON.stringify({
                begin: createTimeRange[0].format('YYYY-MM-DD HH:mm:ss'),
                end: createTimeRange[1].format('YYYY-MM-DD HH:mm:ss')
            });
        }

        return service.query({
            appKey: currentApp?.key,
            curPage,
            sortField: sorter?.field,
            sortOrder: sorter?.order,
            ...rest
        }).then(data => ({
            ...data,
            current: data.curPage,
            data: data.data || []
        }));
    };

    const ExtralActions = (
        <Button.Group>
            <Button icon={<CloudUploadOutlined />} />
            <Button icon={<CloudDownloadOutlined />} />
            <Button icon={<SettingOutlined />} />
        </Button.Group>
    );

    return (
        <QueryListScene
            title="我的工作台"
            query={query}
            actions={actions}
        >
            <QueryForm
                extralActions={ExtralActions}
                initialValues={{
                    member: 'zhangyou'
                }}
            >
                <Field
                    title=""
                    name="projectName"
                    props={{
                        placeholder: '项目名称',
                        onPressEnter: evt => actions.search({ projectName: evt.target.value })
                    }}
                />
                <Field
                    title=""
                    name="maintainer"
                    props={{
                        placeholder: '负责人',
                        onPressEnter: evt => actions.search({ maintainer: evt.target.value })
                    }}
                />
                <Field
                    title=""
                    name="member"
                    type="select"
                    props={{
                        placeholder: '项目成员',
                        showSearch: true,
                        allowClear: true,
                        options: [
                            { label: '张友', value: 'zhangyou' },
                            { label: '路遥', value: 'luyao' },
                            { label: '路人1', value: 'xxx1' },
                            { label: '路人2', value: 'xxx2' }
                        ]
                    }}
                />
                <Field
                    title=""
                    name="createTimeRange"
                    type="dateRange"
                />
            </QueryForm>
            <Toolbar>
                <Button type="primary" onClick={onCreate}>
                    新建项目
                </Button>
            </Toolbar>
            <QueryList
                columns={columns}
                top={334}
                scroll={{ y: window.innerHeight - 334 }}
            />
            <EditModal
                visible={!!editItem}
                editItem={editItem}
                search={actions.search}
                onCancel={() => setEditItem(null)}
            />
        </QueryListScene>
    );
};

export default connect(state => ({
    currentApp: state.global.currentApp
}))(ListPage);
