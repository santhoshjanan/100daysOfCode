import Vue from 'vue';
import Vuex from 'vuex';

import UserStore from './user.store';
import UiStore from './ui.store';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        UserStore,
        UiStore,
    },
});
