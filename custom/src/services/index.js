import createService from '@/services/createServices';
import { reduce } from 'lodash';

export default createService({
    queryPartners: {
        url: '/partner/list'
    },
    queryRiskTypes: {
        url: '/risktype/list'
    }
}, {
    interceptors: [
        {
            '/(partner|risktype)/list': (res = {}) => ({
                ...res,
                data: reduce(res.data || {}, (result, val, key) => {
                    result.push({
                        label: val,
                        value: key
                    });
                    return result;
                }, [])
            })
        }
    ]
});
