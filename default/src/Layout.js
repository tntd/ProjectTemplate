import { useState, useEffect } from 'react';
import { connect } from 'dva';
import { withRouter, matchPath } from 'dva/router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { get } from 'lodash';
import { Layout, AuthContext } from 'tntd';
import { routerPrefix } from '@/constants';

moment.locale('zh-cn');

const { findMenuInfoByPath } = Layout;

const Shell = ({ globalStore = {}, dispatch, actions, history, location, children }) => {
    const { userInfo = {}, currentApp, apps = [], menuTreeData = {} } = globalStore;
    const { name, enName, menuTree = [] } = menuTreeData;
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'cn');
    const getSelectedMenuKey = () => {
        const { subMenu } = findMenuInfoByPath(menuTree, location.pathname);

        return get(subMenu, 'code');
    };
    const onAppChange = app => {
        dispatch({
            type: 'global/updateState',
            payload: {
                currentApp: app
            }
        });
    };
    const onLanguageChange = lang => setLanguage(lang);
    const layoutProps = {
        // compatible: true,
        appKey: 'tnt_cli_identify',
        name,
        enName,
        logo: 'tnt_cli_identify',
        userInfo: userInfo,
        selectedMenuKey: getSelectedMenuKey(),
        menus: menuTree,
        changeRouter: path => history.push(path),
        selectedAppKey: get(currentApp, 'key'),
        appList: apps,
        onLogoClick: () => history.push('/'),
        onAppChange,
        onLanguageChange
    };
    const isEmptyLayout = [
        `${routerPrefix}/dashboard/workspace/:id`
    ].find(path => matchPath(location.pathname, { path }));

    useEffect(() => {
        dispatch({
            type: 'global/getUserInfo',
            actions
        });
        dispatch({
            type: 'global/getUserMenuTree',
            actions
        });

        // 在lightbox中,需要使用事件方式监听数据变化
        const { CURRENT_APP_CHANGE, LANGUAGE_CHANGE } = actions?.EVENTS_ENUM || {};

        if (actions) {
            actions.on(CURRENT_APP_CHANGE, onAppChange);
            actions.on(LANGUAGE_CHANGE, onLanguageChange);
        }

        return () => {
            if (actions) {
                actions.off(CURRENT_APP_CHANGE, onAppChange);
                actions.off(LANGUAGE_CHANGE, onLanguageChange);
            }
        };
    }, []);

    return (
        <ConfigProvider locale={language === 'en' ? enUS : zhCN}>
            <Layout
                {...layoutProps}
                isEmptyLayout={window.isInLightBox || isEmptyLayout}
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
