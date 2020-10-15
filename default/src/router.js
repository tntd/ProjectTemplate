import { Router, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import { get } from 'lodash';
import { Spin } from 'antd';
import { routerPrefix } from '@/constants';
import Layout from './Layout';

// 设置默认的加载组件
dynamic.setDefaultLoadingComponent(() => <Spin className="component-loading" />);

const getExceiptionRouters = app => [
    {
        name: '403',
        path: '/exception/403',
        component: dynamic({
            app,
            component: () => import('./pages/Exception/403')
        })
    },
    {
        name: '404',
        path: '/exception/404',
        component: dynamic({
            app,
            component: () => import('./pages/Exception/404')
        })
    },
    {
        name: '500',
        path: '/exception/500',
        component: dynamic({
            app,
            component: () => import('./pages/Exception/500')
        })
    }
];

export default ({ history, app }) => {
    const navs = [
        {
            name: '我的工作台',
            path: '/dashboard/workspace',
            exact: true,
            component: dynamic({
                app,
                component: () => import('./pages/ListPage')
            })
        },
        {
            name: '详情页',
            path: '/dashboard/workspace/:id',
            component: dynamic({
                app,
                component: () => import('./pages/ListPage/Detail')
            })
        },
        {
            name: '风险趋势分析',
            path: '/trend/riskTrend',
            component: dynamic({
                app,
                models: () => [import('./pages/TabListPage/model')],
                component: () => import('./pages/TabListPage')
            })
        },
        ...getExceiptionRouters(app)
    ].map(item => ({
        ...item,
        path: `${routerPrefix}${item.path}`
    }));

    return (
        <Router history={history}>
            <Layout history={history} navs={navs}>
                <Switch>
                    {
                        navs.map(({ exact = false, path, component }) => (
                            <Route
                                exact={exact}
                                key={path}
                                path={path}
                                component={component}
                            />
                        ))
                    }
                    <Redirect exact from="/" to={`${routerPrefix}`} />
                    <Redirect exact from={`${routerPrefix}`} to={get(navs, '0.path')} />
                    <Redirect exact to={`${routerPrefix}/exception/404`} />
                </Switch>
            </Layout>
        </Router>
    );
};
