import createService from '@/services/createServices';

export default createService({
    queryUserRelationGraph: {
        url: '/risk/user/graph'
    },
    queryUsers: {
        url: '/risk/user/list'
    },
    queryRiskEvents: {
        url: '/risk/event/list'
    },
    riskEventDownload: {
        url: '/risk/event/download'
    }
});
