import { QueryListScene } from 'tntd';
import service from '../service';

const { QueryForm, QueryList, Field, createActions } = QueryListScene;
const actions = createActions();

export default () => {
    const query = (params = {}) => {
        const { current: curPage = 1, pageSize = 20, ...rest } = params;
        return service.query({
            ...rest,
            curPage,
            pageSize
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
                    type: 2
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
                    name="id"
                    type="input"
                    props={{
                        placeholder: 'ID'
                    }}
                />
                <Field
                    title=""
                    name="desc"
                    type="input"
                    props={{
                        placeholder: 'desc'
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
                    name="name2"
                    type="input"
                    props={{
                        placeholder: '名称'
                    }}
                />
                <Field
                    title=""
                    name="id2"
                    type="input"
                    props={{
                        placeholder: 'ID'
                    }}
                />
                <Field
                    title=""
                    name="desc2"
                    type="input"
                    props={{
                        placeholder: 'desc'
                    }}
                />
                <Field
                    title=""
                    name="type2"
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
                        enterButton: true,
                        allowClear: true,
                        placeholder: '团伙ID',
                        onSearch: value => actions.search({
                            gangId: value.trim() ? value.trim() : undefined
                        })
                    }}
                />
            </QueryForm>
            <QueryList columns={columns} />
        </QueryListScene>
    );
}
