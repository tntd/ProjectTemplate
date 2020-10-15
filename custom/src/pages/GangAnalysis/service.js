import createService from '@/services/createServices';

export default createService({
    queryRiskTypeLsit: {
        url: '/risktype/list'
    },
    query: {
        url: '/risk/gang/list'
    }
});
