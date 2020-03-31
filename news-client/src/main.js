import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './plugins/element.js'
import VueStringFilter from 'vue-string-filter'
import store from './store'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://news-server.test:8080/'
Vue.use(VueStringFilter)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
