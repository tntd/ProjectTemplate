/**
 * @file user service
 * @author you.zhang
 */
import userService from '@/services/user';

export default {
    namespace: 'global',
    state: {
        userInfo: {},
        menuTreeData: {},
        currentApp: null
    },
    effects: {
        *getUserInfo({ payload, actions }, { put, call }) {
            let userInfo = (yield call(userService.getUserInfo, payload))

            if (actions) {
                userInfo = actions.getUserInfo();
                actions.on(
                    actions.EVENTS_ENUM.USER_INFO_CHANGE,
                    userInfo => {
                        put({
                            type: 'updateState',
                            payload: {
                               userInfo
                            }
                        });
                    }
                );
            }

            yield put({
                type: 'updateState',
                payload: {
                    userInfo
                }
            });
        },
        *getUserMenuTree({ payload, actions }, { put, call }) {
            let menuTreeData = (yield call(userService.getUserMenuTree, payload));

            if (actions) {
                menuTreeData = actions.getMenuTreeInfo();
                actions.on(
                    actions.EVENTS_ENUM.MENU_TREE_INFO_CHANGE,
                    menuTreeData => {
                        put({
                            type: 'updateState',
                            payload: {
                                menuTreeData
                            }
                        });
                    }
                );
            }

            yield put({
                type: 'updateState',
                payload: {
                    menuTreeData
                }
            });
        }
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
