import service from 'lib-service';
import globalConfig from './config';

export const createServices = (config, options = {}) => {
    return service(globalConfig)(config, options);
};

export const getApps = createServices({
    getApps: {
        url: '/apps'
    }
}).getApps;

export default createServices;
