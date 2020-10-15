import { useState } from 'react';
import { connect } from 'dva';
import { ExportOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import cn from 'classnames';
import { get } from 'lodash';
import moment from 'moment';
import { stringify } from 'querystring';
import { QueryListScene } from 'tntd';
import { types } from '@/constants';
import { prettyJSON } from '@/utils';
import UserDetailsModal from './UserDetailsModal';
import service from './service';
import './index.less';

const { QueryForm, QueryList, Field, createActions } = QueryListScene;
const actions = createActions();

const RiskDetails = ({ dispatch, partnerCode, riskTypes, queryParams }) => {
	const [columns, setColumns] = useState([]);
	const [modalInfo, setModalInfo] = useState({
		visible: false,
		user: null
	});
	const formatParams = ({ pageSize, current, dateRange, type = 'event', order: sortType, field: sortField, ...params } = {}) => {
		return {
			...params,
			type,
			partnerCode,
			sortType,
			sortField,
			page: current || 1,
			pageSize: pageSize || 20,
			...(dateRange ? {
				startTime: dateRange[0] && dateRange[0].format('YYYYMMDD'),
				endTime: dateRange[1] && dateRange[1].format('YYYYMMDD')
			} : {})
		};
	};
	const openUserDetail = record => {
		setModalInfo({
			visible: true,
			user: record
		});
	};
	const query = (params = {}) => {
		return ({
			user: service.queryUsers,
			event: service.queryEvents
		})[params.type || 'event'](
			formatParams(params)
		).then(data => {
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
				headers.map(({ key, value, sort }, index) => {
					const column = {
						dataIndex: key,
						title: value,
						sorter: sort
					};
					const widthMap = {
						riskScore: 80,
						catchWay: 100,
						riskCause: 120,
						gangId: 170
					};

					if (params.type === 'user' && index === 0) {
						column.render = (val, record) => (
							<a onClick={() => openUserDetail(record)}>{val}</a>
						);
					}

					if (key === 'attrInfo') {
						column.ellipsis = true;
						column.render = val => (
							<Tooltip title={<pre>{prettyJSON(val)}</pre>} placement="topLeft">
								<span style={{ cursor: 'pointer' }}>
									{val}
								</span>
							</Tooltip>
						);
					}

					return {
						...column,
						width: column.width || widthMap[key]
					};
				})
			);

			return {
				current: page,
				pageSize,
				total,
				data: rowDatas
			};
		});
	};
	const ExtralActions = () => {
		const downloadUrl = `${{
			user: service.riskUsersDownload.URL.href,
			event: service.riskEventsDownload.URL.href
		}[actions.getFormData('type')]}`;

		return (
            <a
				href={`${downloadUrl}?${stringify(formatParams(actions.getFormData()))}`}
				target="__blank"
			>
				<ExportOutlined /> 导出
			</a>
        );
	};
	const onFormChange = values => {
		dispatch({
			type: 'global/updateState',
			payload: {
				queryParams: {
					...queryParams,
					...values
				}
			}
		});
		actions.setFormData(values);
	};

	console.log('columns', columns);

	return (
		<QueryListScene query={query} actions={actions} className="risk-details-page">
			<QueryForm
				initialValues={queryParams}
				renderActions={() => null}
				extralActions={<ExtralActions />}
				onChange={onFormChange}
			>
				<Field
					title="风险类型"
					name="riskType"
					type="select"
					props={{
						placeholder: '风险类型',
						options: riskTypes,
						allowClear: false
					}}
				/>
				<Field
					title="时间范围"
					name="dateRange"
					type="dateRange"
					props={{
						allowClear: false
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
						allowClear: false,
						options: types
					}}
				/>
			</QueryForm>
			<QueryList
				columns={columns}
				onRow={
					record => ({
						onClick: () => {
							actions.getFormData('type') === 'user' && openUserDetail(record);
						}
					})
				}
			/>
			<UserDetailsModal
				visible={modalInfo.visible}
				user={modalInfo.user}
				partnerCode={partnerCode}
				close={() => {
					setModalInfo({
						visible: false,
						user: null
					});
				}}
			/>
		</QueryListScene>
	);
};

export default connect(state => ({
	partnerCode: get(state.global, 'currentPartner.key'),
	riskTypes: get(state.global, 'riskTypes'),
	queryParams: get(state.global, 'queryParams') || {}
}))(RiskDetails);
