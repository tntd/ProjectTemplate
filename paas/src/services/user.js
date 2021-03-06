import service from 'lib-service';
import globalConfig from './config';

console.log('globalConfig...', globalConfig);

export const createServices = (config, options = {}) => {
    return service({
        ...globalConfig,
        baseUrl: '/bridgeApi'
    })(config, options);
};

export default createServices({
    getUserInfo: {
        url: '/userCenter/getUserInfo'
    },
    getUserMenuTree: {
        url: '/user/menuTree'
    }
});
