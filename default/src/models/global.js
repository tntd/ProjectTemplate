/**
 * @file user service
 * @author you.zhang
 */
import userService from '@/services/user';
import { getApps } from '@/services';

export default {
    namespace: 'global',
    state: {
        userInfo: {},
        menuTreeData: {},
        apps: [],
        currentApp: null
    },
    effects: {
        *getUserInfo({ payload }, { put, call }) {
            const userInfo = (yield call(userService.getUserInfo, payload))

            yield put({
                type: 'updateState',
                payload: {
                    userInfo
                }
            });
        },
        *getUserMenuTree({ payload }, { put, call }) {
            const menuTreeData = (yield call(userService.getUserMenuTree, payload));

            yield put({
                type: 'updateState',
                payload: {
                    menuTreeData
                }
            });
        },
        *getApps({ payload }, { put, call }) {
            const apps = (yield call(getApps, payload));

            yield put({
                type: 'updateState',
                payload: {
                    apps
                }
            });

            return apps;
        },
    },
    reducers: {
        updateState(state, { payload }) {
            return {
                ...state,
                ...payload
            };
        }
    }
};
