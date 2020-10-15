import { createServices } from '@/services';

export default createServices({
    query: {
        url: '/project/list'
    },
    create: {
        url: '/project/create',
        method: 'POST'
    },
    remove: {
        url: '/project/delete',
        method: 'POST'
    },
    update: {
        url: '/project/update',
        method: 'POST'
    },
    queryUsers: {
        url: '/user/list'
    }
}, {
    interceptors: [
        {
            '/user/list': res => {
                const accountReg = /(.*)(@.*)/;

                return {
                    ...res,
                    data: (res.model || []).map(user => ({
                        label: `${user.userName}(${user.account.replace(accountReg, '$1')})`,
                        value: user.account.replace(accountReg, '$1')
                    }))
                };
            }
        }
    ]
});
