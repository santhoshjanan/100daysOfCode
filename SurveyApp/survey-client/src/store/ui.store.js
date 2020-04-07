export default {
    state: {
        uiCollapsed: false,
    },
    mutations: {
        expandsidenav: (state, payload) => {
            console.log('commit', payload);
            state.uiCollapsed = payload;
        },
    },
    actions: {
        UIEXPANDSIDENAV: ({ commit }, payload) => {
            commit('expandsidenav', payload);
        },
    },
    getters: {
        collapseStateChanged: (state) => {
            return state.uiCollapsed;
        },
    },
};
