import { useState } from 'react';
import { Modal } from 'antd';
import {
    SchemaForm,
    SchemaMarkupField as Field,
    createFormActions
} from '@formily/antd';
import { Input, Select } from '@formily/antd-components';
import service from '../service';

const actions = createFormActions();
const components = {
    Input,
    TextArea: Input.TextArea,
    Select
};

export default props => {
    const { editItem, visible, userInfo = {}, onCancel } = props;
    const [confirmLoading, setConfirmLoading] = useState(false);
    const isCreate = !editItem?.id;
    const onSubmit = values => {
        const { search, onCancel } = props;

        setConfirmLoading(true);

        service[`${isCreate ? 'create' : 'update'}`](values).then(() => {
            onCancel();
            search();
        }).finally(() => {
            setConfirmLoading(false);
        });
    };

    return (
        <Modal
            title={`${isCreate ? '新建' : '更新'}项目`}
            visible={visible}
            destroyOnClose
            confirmLoading={confirmLoading}
            onCancel={onCancel}
            onOk={() => actions.submit()}
        >
            <SchemaForm
                initialValues={{
                    maintainer: userInfo.accountName,
                    ...editItem
                }}
                components={components}
                onSubmit={onSubmit}
                actions={actions}
                labelCol={4}
                wrapperCol={20}
                effects={($, { setFieldState }) => {
                    $('onFormInit').subscribe(() => {
                        service.queryUsers().then(users => {
                            setFieldState('members', state => {
                                console.log('users...', users);
                                state.props.enum = users;
                            });
                            setFieldState('maintainer', state => {
                                console.log('users...', users);
                                state.props.enum = users;
                            });
                        });
                    });
                }}
            >
                <Field
                    required
                    title="项目名称"
                    type="string"
                    name="name"
                    editable={isCreate}
                    x-component="Input"
                    x-rules={{
                        pattern: /^(?!\-)[a-z\d\._\-]+(?<!\.(git|autom))$/i,
                        message: "只能包含字母、数字、_、-和.。不能以-开头，且不能以'.git'或'.autom'结尾"
                    }}
                />
                <Field
                    title="项目描述"
                    type="string"
                    name="description"
                    x-component="TextArea"
                />
                <Field
                    required
                    title="负责人"
                    type="string"
                    name="maintainer"
                    enum={[]}
                    x-component="Select"
                    x-props={{
                        hasClear: true,
                        showSearch: true,
                        placeholder: '分配GitLab仓库owner角色，同时具有项目“管理”权限'
                    }}
                />
                <Field
                    title="项目成员"
                    type="string"
                    name="members"
                    enum={[]}
                    x-component="Select"
                    x-props={{
                        hasClear: true,
                        mode: 'multiple',
                        placeholder: '项目成员分配GitLab仓库developer角色'
                    }}
                />
            </SchemaForm>
        </Modal>
    );
};
