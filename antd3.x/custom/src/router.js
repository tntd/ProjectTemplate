import { Router, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import { get } from 'lodash';
import { Spin } from 'antd';
import { routerPrefix } from '@/constants';
import Layout from './Layout';

// 设置默认的加载组件
dynamic.setDefaultLoadingComponent(() => {
	return <Spin className="component-loading"/>;
});

export default ({ history, app }) => {
    const navs = [
        {
            name: '概览',
            key: '/dashboard',
            component: dynamic({
                app,
                models: () => [import('./pages/Dashboard/model')],
                component: () => import('./pages/Dashboard')
            })
        },
        {
            name: '团伙分析',
            key: '/gangAnalysis',
            exact: true,
            component: dynamic({
                app,
                component: () => import('./pages/GangAnalysis')
            })
        },
        {
            name: '团伙分析详情',
            key: '/gangAnalysis/:id',
            showNav: false,
            exact: true,
            component: dynamic({
                app,
                component: () => import('./pages/GangAnalysis/Details')
            }),
        },
        {
            name: '风险详情',
            key: '/riskDetails',
            component: dynamic({
                app,
                component: () => import('./pages/RiskDetails')
            })
        }
    ].map(item => ({
        ...item,
        key: `${routerPrefix}${item.key}`
    }));

    return (
        <Router history={history}>
            <Layout
                history={history}
                navs={navs}
            >
                <Switch>
                    {
                        navs.map(({ exact = false, key: path, component }) => (
                            <Route
                                exact={exact}
                                key={path}
                                path={path}
                                component={component}
                            />
                        ))
                    }
                    <Redirect to={get(navs, '0.key')} />
                </Switch>
            </Layout>
        </Router>
    );
};
