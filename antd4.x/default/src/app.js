import dva from 'dva';
import { createBrowserHistory } from 'history';
import { message } from 'antd';
import moment from 'moment';
import 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import globalModel from './models/global';
import router from './router';
import './app.less';

moment.locale('zh-cn');

const app = dva({
	history: createBrowserHistory(),
	onError(err) {
		console.log('dva onError', err);
		if (err && err.status === 401) {
			// goToLogin();
			console.log(401);
		}
		message.error(err && err.message || '未知错误');
	}
});

// 配置 hooks 或者注册插件
// app.use(nprogressDva());
app.model(globalModel);

app.router(router);
app.start('#root');

export default app._store;
