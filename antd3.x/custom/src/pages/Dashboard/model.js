export default {
    namespace: 'dashboard',
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
