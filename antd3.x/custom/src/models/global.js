import commonService from '@/services';
import moment from 'moment';
import { get } from 'lodash';

export default {
    namespace: 'global',
    state: {
        currentPartner: null,
        partners: [],
        riskTypes: [],
        queryParams: {
            type: 'event',
            riskType: undefined,
            dateRange: [
                moment().subtract(15, 'days'),
                moment().subtract(1, 'days')
            ]
        }
    },
    effects: {
        *queryPartners({ payload }, { put, call }) {
            const partners = (yield call(commonService.queryPartners, payload)).map(
                ({ label, value }) => ({ name: label, key: value })
            );

            yield put({
                type: 'updateState',
                payload: {
                    partners: partners,
                    currentPartner: partners[0]
                }
            });
        },
        *queryRiskTypes({ payload }, { put, call, select }) {
            const riskTypes = (yield call(commonService.queryRiskTypes, payload));
            const queryParams = yield select(state => state.global.queryParams);

            yield put({
                type: 'updateState',
                payload: {
                    riskTypes,
                    queryParams: {
                        ...queryParams,
                        riskType: get(riskTypes, '0.value')
                    }
                }
            });
        },
    },
    reducers: {
        updateState(state, { payload }) {
            return {
                ...state,
                ...payload
            };
        }
    },
    subscriptions: {
        setup({ dispatch }) {
            dispatch({
                type: 'queryPartners'
            });
            dispatch({
                type: 'queryRiskTypes'
            });
        }
    }
};
