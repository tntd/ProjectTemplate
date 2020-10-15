const getUserInfo = require('./getUserInfo');
const menuTree = require('./menuTree');

module.exports = {
    'GET /bridgeApi/userCenter/getUserInfo': getUserInfo,
    'GET /bridgeApi/user/menuTree': menuTree
};
