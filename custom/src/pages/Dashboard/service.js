import createService from '@/services/createServices';

export default createService({
    queryRiskTypeLsit: {
        url: '/risktype/list'
    },
    queryOverview: {
        url: '/overview'
    },
    queryRiskGain: {
        url: '/risk/gain'
    },
    queryRiskScore: {
        url: '/risk/score'
    },
    queryRiskCause: {
        url: '/risk/cause'
    },
    queryRiskGang: {
        url: '/risk/gang'
    },
    queryRiskGangList: {
        url: '/risk/gang/list'
    }
});
