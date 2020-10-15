import { useState, useEffect } from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { get } from 'lodash';
import { Layout } from 'tntd';
import logo from '@/images/logo.svg';

moment.locale('zh-cn');

const { HeaderNavs } = Layout;

const Shell = ({ globalStore = {}, dispatch, history, location, navs, children }) => {
    const { currentPartner, partners = [] } = globalStore;

    const onNavSelect = nav => {
        if (nav.key === location.pathname) {
            history.replace(nav.key);
        } else {
            history.push(nav.key);
        }
    };
    const getSelecteNavKey = () => {
        const pathPrefix = location.pathname.split('/')[2] || get(navs, '0.key').split('/')[2];
        const activeNav = navs.find(
            ({ key: path }) => pathPrefix === path.split('/')[2]
        );

        return get(activeNav, 'key') || get(navs, '0.key');
    };
    const Navs = props => {
        const [selectedKey, setSelectedKey] = useState(getSelecteNavKey());

        useEffect(() => {
            setSelectedKey(getSelecteNavKey());
        }, [location]);

        return (
            <HeaderNavs
                {...props}
                selectedKey={selectedKey}
            />
        );
    };
    const layputPorps = {
        type: 'paas',
        name: '自动反欺诈',
        logo: <img src={logo} className="logo"/>,
        userInfo: {
            lang: 'cn'
        },
        config: {
            language: false,
            application: false,
            theme: false,
            // avatar: false
        },
        selectedAppKey: get(currentPartner, 'key'),
        appList: partners,
        onLogoClick: () => {
            history.push('/');
        },
        onAppChange: app => {
            dispatch({
                type: 'global/updateState',
                payload: {
                    currentPartner: app
                }
            });
        },
        headerNavs: (
            <Navs
                selectedKey={getSelecteNavKey()}
                navs={navs.filter(({ showNav = true }) => showNav)}
                onSelect={onNavSelect}
            />
        ),
        sideMenu: null
    };

    return (
        <ConfigProvider locale={zhCN}>
            <Layout
                {...layputPorps}
                compatible
                size="large"
                key={get(currentPartner, 'key')}
                className="aaf-layout"
            >
                {children}
            </Layout>
        </ConfigProvider>
    );
};

export default withRouter(
    connect(state => ({
        globalStore: state.global
    }))(Shell)
);
