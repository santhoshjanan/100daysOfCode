import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

import './registerServiceWorker';
import './assets/tailwind.css';
import './plugins/element.js';

Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.VUE_APP_SURVEYURL;
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
