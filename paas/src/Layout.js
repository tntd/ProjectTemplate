import { useEffect } from 'react';
import { connect } from 'dva';
import { withRouter, matchPath } from 'dva/router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { get } from 'lodash';
import { Layout, AuthContext } from 'tntd';
import logo from '@/images/logo.svg';
import { routerPrefix } from '@/constants';
import { findMenuInfoByPath } from '@/utils';

moment.locale('zh-cn');

const Shell = ({ globalStore = {}, dispatch, history, children }) => {
    const { userInfo = {}, currentApp, apps = [], menuTreeData = {} } = globalStore;
    const { name, enName, menuTree = [] } = menuTreeData;
    const getSelecteMenuKey = () => {
        const { subMenu } = findMenuInfoByPath(menuTree, location.pathname);

        return get(subMenu, 'code');
    };
    const layputPorps = {
        type: 'paas',
        appKey: 'tnt_cli_identify',
        name,
        enName,
        logo: <img src={logo} className="logo" />,
        userInfo: userInfo,
        menus: menuTree,
        selectedMenuKey: getSelecteMenuKey(),
        config: {
            language: false,
            application: true,
            theme: false,
            avatar: true
        },
        selectedAppKey: get(currentApp, 'key'),
        appList: apps,
        onMenuChange: ({ data }) => history.push(get(data, 'path')),
        onLogoClick: () => history.push('/'),
        onAppChange: app => {
            dispatch({
                type: 'global/updateState',
                payload: {
                    currentApp: app
                }
            });
        },
        onApplicationChange: appKey => {
            alert(`跳转转到对应系统地址[${appKey}]， 这个地址是不是需要单独管理起来？`);
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
                compatible
                isEmptyLayout={isEmptyLayout}
                size="large"
                key={get(currentApp, 'key')}
                className="tnt_cli_identify-layout"
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
