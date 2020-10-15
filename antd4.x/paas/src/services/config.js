import { message } from 'antd';

export default {
    baseUrl: '/tnt_cli_identifyApi',
    dataType: 'json',
    401: res => {
        console.error('401', res);
        // goToLogin(res && res.data);
    },
    403: res => {
        console.log(res);
        message.warn(`【403】${res.message || res.statusText}`);
    },
    onError: err => {
        message.error((err && err.message) || '未知错误');
    }
};
