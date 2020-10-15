import { useEffect } from 'react';
import { connect } from 'dva';
import {
	SchemaForm,
	SchemaMarkupField as Field,
	createFormActions
} from '@formily/antd';
import { Input, Select, DatePicker } from '@formily/antd-components';
import moment from 'moment';
import { get, forIn } from 'lodash';
import { types } from '@/constants';
import Dashboard from './Dashboard';
import service from './service';
import './index.less';

const actions = createFormActions();

const DashboardOverview = props => {
	const { dispatch, partnerCode, riskTypes, queryParams } = props;
	const { dateRange } = queryParams;

	const loadCharts = ({ dateRange: [startTime = '', endTime = ''], ...params }) => {
		params.startTime = startTime.replace(/\-/g, '');
		params.endTime = endTime.replace(/\-/g, '');
		params.partnerCode = partnerCode;
		params.type = params.type || 'event';

		// charts
		const updateStateByKey = (key, data) => {
			dispatch({
				type: 'dashboard/update',
				payload: {
					[key]: data
				}
			});
		};
		const chartsRequestMap = {
			overview: {
				query: service.queryOverview,
				params
			},
			riskGain: {
				query: service.queryRiskGain,
				params
			},
			riskScore: {
				query: service.queryRiskScore,
				params
			},
			riskCause: {
				query: service.queryRiskCause,
				params
			},
			riskGang: {
				query: service.queryRiskGang,
				params,
				formatter: data => ({
					...data,
					y: get(data, 'y', []).map(
						(item, index) => {
							return (item || []).map(subItem => ({
								...subItem, type: index === 0 ? 'bar' : 'line'
							}));
						}
					)
				})
			},
			riskGangList: {
				query: service.queryRiskGangList,
				params: {
					...params,
					sortField: 'userCount',
					sortType: 'desc',
					page: 1,
					pageSize: 5
				},
				formatter: data => get(data, 'chart.rowDatas', [])
			}
		};

		forIn(
			chartsRequestMap,
			({ query, params, formatter }, key) => {
				formatter = formatter || (data => data);
				query(params).then(data => {
					updateStateByKey(key, formatter(data));
				});
			}
		);
	};
	const onFormChange = values => {
		dispatch({
			type: 'global/updateState',
			payload: {
				queryParams: {
					...queryParams,
					...values,
					dateRange: values.dateRange.map(item => moment(item))
				}
			}
		});
		loadCharts(values);
	};

	useEffect(() => {
		if (partnerCode && riskTypes.length) {
			loadCharts(actions.getFormState(state => state.values));
		}
	}, [partnerCode, riskTypes]);

	return (
		<div className="dashboard-overview">
			<SchemaForm
				inline
				components={{
					Input,
					Select,
					RangePicker: DatePicker.RangePicker
				}}
				initialValues={{
					...queryParams,
					dateRange: [
						dateRange[0].format('YYYY-MM-DD'),
						dateRange[1].format('YYYY-MM-DD')
					]
				}}
				actions={actions}
				onChange={onFormChange}
			>
				<Field
					type="string"
					title="风险类型"
					name="riskType"
					enum={riskTypes}
					x-component="Select"
					x-component-props={{
						placeholder: '请选择风险类型',
						style: { width: 160 }
					}}
				/>
				<Field
					type="array<date>"
					title="时间范围"
					name="dateRange"
					x-component="RangePicker"
					x-props={{
						// disabledDate: currentDate => {
						//     const current = currentDate.format('YYYYMMDD');
						//     return current >= moment().format('YYYYMMDD') || current <= moment().subtract(30, 'days').format('YYYYMMDD')
						// }
					}}
				/>
				<Field
					type="string"
					title="分析类别"
					name="type"
					enum={types}
					x-component="Select"
					x-component-props={{
						style: { width: 160 }
					}}
				/>
			</SchemaForm>
			<Dashboard {...props} formActions={actions} />
		</div>
	);
};

export default connect(state => ({
	store: state.dashboard,
	riskTypes: get(state.global, 'riskTypes') || [],
	partnerCode: get(state.global, 'currentPartner.key'),
	queryParams: get(state.global, 'queryParams')
}))(DashboardOverview);
