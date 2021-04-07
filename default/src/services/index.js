import service from 'lib-service';
import globalConfig from './config';

export const createServices = (config, options = {}) => {
    return service(globalConfig)(config, options);
};

export default createServices;
