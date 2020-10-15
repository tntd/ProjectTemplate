
import '../index.less';

export default () => {
    console.log('exception 404...');
	return (
        <div className="exception">
            <div className="img-block">
                <div className="img-ele exp404"></div>
            </div>
            <div className="content">
                <h1>404</h1>
                <div className="desc">抱歉，你访问的页面不存在</div>
            </div>
        </div>
    );
};
