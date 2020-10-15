import { connect } from 'dva';
import { Link } from 'dva/router';
import { Icon } from 'antd';
import './index.less';

export default connect(state => ({
    globalStore: state.global
}))(
    ({ location }) => (
        <div className="detail-page">
            <header>
                <Link to={location.pathname.replace('/detail', '')}>
                    <Icon type="left" />返回
                </Link>
                <span>详情页</span>
            </header>
            <div>
                Detail Page
            </div>
        </div>
    )
);
