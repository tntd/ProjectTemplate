export default {
    namespace: 'tabListPage',
    state: {

    },
    effects: {

    },
    reducers: {
        update(state, { payload }) {
            return {
                ...state,
                ...payload
            };
        }
    }
}
