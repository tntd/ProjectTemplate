import createService from '@/services/createServices';

export default createService({
    queryUsers: {
        url: '/risk/user/list'
    },
    queryUserDetail: {
        url: '/risk/user/detail'
    },
    queryEvents: {
        url: '/risk/event/list'
    },
    riskEventsDownload: {
        url: '/risk/event/download'
    },
    riskUsersDownload: {
        url: '/risk/user/download'
    }
});
