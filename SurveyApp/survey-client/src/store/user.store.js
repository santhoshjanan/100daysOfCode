import axios from 'axios';

export default {
    state: {
        user: null,
        token: null,
        authenticated: false,
    },
    mutations: {
        authenticate: (state, payload) => {
            state.token = payload.token;
            state.user = payload.user;
            state.authenticated = payload.authenticated;
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            state.authenticated = false;
        },
    },
    actions: {
        LOGIN({ commit }, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post('/user/login', payload)
                    .then((response) => {
                        commit('authenticate', {
                            user: response.data.data,
                            token: response.data.token,
                            authenticated: true,
                        });

                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('id', response.data.data._id);
                        localStorage.setItem('name', response.data.data.name);
                        localStorage.setItem('authenticated', true);
                        resolve(true);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        AUTOLOGIN({ commit }) {
            return new Promise((resolve, reject) => {
                const token = localStorage.getItem('token');
                const id = localStorage.getItem('id');
                const name = localStorage.getItem('name');
                const authenticated = localStorage.getItem('authenticated');
                if (authenticated) {
                    commit('authenticate', {
                        user: { id, name },
                        token,
                        authenticated,
                    });
                    resolve(true);
                } else {
                    reject('Not Authenticated');
                }
            });
        },
        LOGOUT({ commit }, payload) {
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            localStorage.removeItem('name');
            localStorage.removeItem('authenticated');
            commit('logout', payload);
        },
    },
    getters: {
        token: (state) => {
            return state.token;
        },
        userDetails: (state) => {
            return state.user;
        },
        authenticated: (state) => {
            return state.authenticated;
        },
    },
};
