import { Tabs, Breadcrumb } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { get } from 'lodash';
import { parse } from 'query-string';
import { routerPrefix } from '@/constants';
import UserRelations from './UserRelations';
import GangEvents from './GangEvents';
import './index.less';

const { TabPane } = Tabs;

export default connect(({ global }) => ({
    currentPartner: global.currentPartner
}))(
    ({ currentPartner, match }) => {
        const gangId = get(match, 'params.id');
        const partnerCode = get(currentPartner, 'key');
        const { type } = parse(window.location.search);

        return ( 
            <div className="gang-analysis-details">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={`${routerPrefix}/gangAnalysis`}>团伙分析</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>团伙分析详情</Breadcrumb.Item>
                </Breadcrumb>
                <Tabs>
                    {
                        type === 'user' && (
                            <TabPane tab="用户关联" key="userRelations">
                                <UserRelations
                                    gangId={gangId}
                                    partnerCode={partnerCode}
                                />
                            </TabPane>
                        )
                    }
                    {
                        type === 'event' && (
                            <TabPane tab="团伙事件" key="gangEvents">
                                <GangEvents
                                    gangId={gangId}
                                    partnerCode={partnerCode}
                                />
                            </TabPane>
                        )
                    }
                </Tabs>
            </div>
        );
    }
);
