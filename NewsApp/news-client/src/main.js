import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './plugins/element.js'
import VueStringFilter from 'vue-string-filter'
import store from './store'
import dotenv from 'dotenv'
import moment from 'vue-moment'
import truncatefilter from 'vue-truncate-filter'

dotenv.config()
Vue.use(moment)
Vue.use(truncatefilter)

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_NEWSAPIBASE
Vue.use(VueStringFilter)

export const eventBus = new Vue()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
