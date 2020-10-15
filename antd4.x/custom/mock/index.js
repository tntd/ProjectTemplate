
const { reduce } = require('lodash');

const apiPrefix = '/tnt_cli_identifyApi';

module.exports = reduce({
    '/partner/list': require('./partnerList'),
    '/risktype/list': require('./riskTypeList'),
    '/overview': require('./overview'),
    '/risk/gain': require('./risk/gain'),
    '/risk/score': require('./risk/score'),
    '/risk/cause': require('./risk/cause'),
    '/risk/gang': require('./risk/gang'),
    '/risk/event/list': require('./risk/eventList'),
    '/risk/event/download': require('./risk/eventDownload'),
    '/risk/gang/list': require('./risk/gangList'),
    '/risk/user/list': require('./risk/userList'),
    '/risk/user/download': require('./risk/userDownload'),
    '/risk/user/detail': require('./risk/userDetail'),
    '/risk/user/graph': require('./risk/userGraph')
}, (acc, value, key) => {
    acc[`${apiPrefix}${key}`] = value;
    return acc;
}, {});