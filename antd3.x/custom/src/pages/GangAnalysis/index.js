import { useState } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { get } from 'lodash';
import { stringify } from 'query-string';
import moment from 'moment';
import { Spin } from 'antd';
import { QueryListScene } from 'tntd';
import { routerPrefix, types } from '@/constants';
import service from './service';

const { QueryForm, QueryList, Field, createActions } = QueryListScene;
const actions = createActions();

const GangAnalysis = ({ dispatch, currentPartner, riskTypes, queryParams }) => {
    const [columns, setColumns] = useState([]);
    const formatParams = ({ pageSize, current, dateRange, order: sortType, field: sortField, ...params } = {}) => {
        return {
            ...params,
            partnerCode: get(currentPartner, 'key'),
            page: current || 1,
            pageSize: pageSize || 20,
            sortType,
            sortField,
            ...(dateRange ? {
                startTime: dateRange[0] && dateRange[0].format("YYYYMMDD"),
                endTime: dateRange[1] && dateRange[1].format("YYYYMMDD")
            } : {})
        }
    };
    const query = (params = {}) => {
        return service.query(formatParams(params)).then(data => {
            const {
                page,
                pageSize,
                total,
                chart: {
                    headers = [],
                    rowDatas = []
                } = {} 
            } = data;

            setColumns(
                [
                    ...headers.map(({ key, value, sort }) => ({
                        dataIndex: key,
                        title: value,
                        sorter: sort
                    })),
                    {
                        dataIndex: 'operations',
                        title: '操作',
                        width: 60,
                        render: (val, record) => {
                            const { page, pageSize, ...params } = formatParams(actions.getFormData());

                            return (
                                <Link
                                    to={`${routerPrefix}/gangAnalysis/${record.gangId}?${stringify(params)}`}
                                >
                                    查看
                                </Link>
                            );
                        }
                    }
                ]
            );

            return {
                current: page,
                pageSize,
                total,
                data: rowDatas 
            };
        });
    };

    const onFormChange = (values, { name }) => {
        console.log('onFormChange...', values);
        if (name !== 'gangId') {
            actions.setFormData(values);
            dispatch({
                type: 'global/updateState',
                payload: {
                    queryParams: {
                        ...queryParams,
                        ...values
                    }
                }
            });
        }
    };

    if (!get(currentPartner, 'key')) {
        return <Spin />
    }

    return (
        <QueryListScene query={query} actions={actions}>
            <QueryForm
                initialValues={queryParams}
                renderActions={() => null}
                onChange={onFormChange}
            >
                <Field
                    title="风险类型"
                    name="riskType"
                    type="select"
                    props={{
                        placeholder: '风险类型',
                        options: riskTypes
                    }}
                />
                <Field
                    title="时间范围"
                    name="dateRange"
                    type="dateRange"
                    props={{
                        // disabledDate: currentDate => {
                        //     const current = currentDate.format('YYYYMMDD');
                        //     return current >= moment().format('YYYYMMDD') || current <= moment().subtract(30, 'days').format('YYYYMMDD')
                        // }
                    }}
                />
                <Field
                    title="分析类别"
                    name="type"
                    type="select"
                    props={{
                        options: types
                    }}
                />
                <Field
                    title="团伙ID"
                    name="gangId"
                    type="search"
                    props={{
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
            </QueryForm>
            <QueryList columns={columns} />
        </QueryListScene>
    );
}

export default connect(
    state => ({
        currentPartner: get(state.global, 'currentPartner'),
        riskTypes: get(state.global, 'riskTypes') || [],
        queryParams: get(state.global, 'queryParams') || {}
    })
)(GangAnalysis);
