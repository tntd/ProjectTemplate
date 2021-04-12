import ReactDOM from 'react-dom';
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

const registerModels = () => {
	app.model(globalModel);
};

registerModels(app);

if (!window.isInLightBox) {
	app.router(router);
	app.start('#root');
}

export async function bootstrap() {
	console.log('react app bootstrapped');
};

export const mount = async ({ actions }) => {
	// 这里每次挂载时需要重新创建history对象，
	// 解决二次挂载时用到了前一次挂载的history对象而导致路由render异常问题
	app.router(
		({ app }) => router({ history: createBrowserHistory(), app, actions })
	);
	app.start('#root');
};

export const unmount = async () => {
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
};

export async function update(props) {
	console.log('update props', props);
};

export const getAppStore = () => app._store;

export default app._store;
