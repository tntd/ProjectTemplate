import { useEffect } from 'react';
import { connect } from 'dva';
import { withRouter, matchPath } from 'dva/router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { get } from 'lodash';
import { Layout, AuthContext } from 'tntd';
import { findMenuInfoByPath } from '@/utils';
import { routerPrefix } from '@/constants';

moment.locale('zh-cn');

const Shell = ({ globalStore = {}, dispatch, history, location, children }) => {
    const { userInfo = {}, currentApp, apps = [], menuTreeData = {} } = globalStore;
    const { name, enName, menuTree = [] } = menuTreeData;
    const getSelecteMenuKey = () => {
        const { subMenu } = findMenuInfoByPath(menuTree, location.pathname);

        return get(subMenu, 'code');
    };
    const onMenuChange = ({ data }) => {
        const path = get(data, 'path');

        // 当前系统
        if (path.startsWith(routerPrefix)) {
            history.push(path);
        } else { // 跳转到其它系统
            window.location.href = path;
        }
    };
    console.log('currentApp...', currentApp);
    const layputPorps = {
        appKey: 'tnt_cli_identify',
        name,
        enName,
        logo: 'tnt_cli_identify',
        userInfo: userInfo,
        selectedMenuKey: getSelecteMenuKey(),
        menus: menuTree,
        onMenuChange,
        selectedAppKey: get(currentApp, 'key'),
        appList: apps,
        onLogoClick: () => history.push('/'),
        onAppChange: app => {
            dispatch({
                type: 'global/updateState',
                payload: {
                    currentApp: app
                }
            });
        }
    };
    const isEmptyLayout = [
        `${routerPrefix}/dashboard/workspace/:id`
    ].find(path => matchPath(location.pathname, { path }));

    useEffect(() => {
        dispatch({
            type: 'global/getUserInfo'
        });
        dispatch({
            type: 'global/getUserMenuTree'
        });
        dispatch({
            type: 'global/getApps'
        });
    }, []);

    return (
        <ConfigProvider locale={zhCN}>
            <Layout
                {...layputPorps}
                isEmptyLayout={isEmptyLayout}
                key={get(currentApp, 'key')}
                className="ued-framework-layout"
            >
                {/** 这个Consumer只是个空壳子，目的是满足大家使用window.auth的期望 */}
                <AuthContext.Consumer>
                    {
                        auth => {
                            window.auth = auth;
                            return children;
                        }
                    }
                </AuthContext.Consumer>
            </Layout>
        </ConfigProvider>
    );
};

export default withRouter(
    connect(state => ({
        globalStore: state.global
    }))(Shell)
);
