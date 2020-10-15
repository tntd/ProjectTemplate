import { connect } from 'dva';
import { Link } from 'dva/router';
import { LeftOutlined } from '@ant-design/icons';
import './index.less';

export default connect(state => ({
    globalStore: state.global
}))(
    ({ location }) => {
        return (
            <div className="detail-page">
                <header>
                    <Link to={location.pathname.replace(/(.+)(\/.+?)$/, '$1')}>
                        <LeftOutlined />返回
                    </Link>
                    <span>详情页</span>
                </header>
                <div>
                    Detail Page
                </div>
            </div>
        );
    }
);
