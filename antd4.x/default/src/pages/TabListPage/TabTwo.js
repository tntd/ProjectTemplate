import { QueryListScene } from 'tntd';
import service from './service';

const { QueryForm, QueryList, Field, createActions } = QueryListScene;
const actions = createActions();

export default () => {
    const query = (params = {}) => {
        return service.query({
            ...params,
            curPage: params.current || 1,
            pageSize: params.pageSize || 20
        }).then(data => ({
            ...data,
            data: data.data || [],
            current: data.curPage
        }));
    };
    const columns = [
        { title: '策略集/策略', dataIndex: 'name' },
        { title: '所属应用', dataIndex: 'appDisplayName' },
        { title: '描述', dataIndex: 'description' },
        { title: '策略回测', dataIndex: 'eventType' },
        { title: '回测状态', dataIndex: 'status' },
        { title: '操作', dataIndex: 'operations' }
    ];

    return (
        <QueryListScene
            query={query}
            actions={actions}
        >
            <QueryForm
                initialValues={{
                    type: 1
                }}
            >
                <Field
                    title=""
                    name="name"
                    type="input"
                    props={{
                        placeholder: '名称'
                    }}
                />
                <Field
                    title=""
                    name="type"
                    type="select"
                    props={{
                        options: [
                            { label: '类别1', value: 1 },
                            { label: '类别2', value: 2 }
                        ]
                    }}
                />
                <Field
                    title=""
                    name="gangId"
                    type="search"
                    props={{
                        placeholder: '团伙ID',
                        enterButton: true,
                        allowClear: true,
                        onSearch: value => {
                            actions.setFormData({
                                ...actions.getFormData(),
                                gangId: value.trim() ? value.trim() : undefined
                            });
                        }
                    }}
                />
                <Field
                    title=""
                    name="info"
                    type="selectInput"
                    props={{
                        options: [
                            { label: '选项一', value: 'type1' },
                            { label: '选项二', value: 'type2' },
                            { label: '选项三', value: 'type3' }
                        ],
                        placeholder: '请输入'
                    }}
                />
            </QueryForm>
            <QueryList columns={columns} />
        </QueryListScene>
    );
}
