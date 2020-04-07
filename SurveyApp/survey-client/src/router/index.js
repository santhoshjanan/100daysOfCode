import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        children: [
            {
                path: '',
                name: 'Dashboard-home',
                component: () =>
                    import(
                        /* webpackChunkName: "survey" */ '../components/Survey/SurveyList.vue'
                    ),
            },
            {
                path: '/dashboard/survey/create',
                name: 'Dashboard-survey-create',
                component: () =>
                    import(
                        /* webpackChunkName: "survey" */ '../components/Survey/SurveyCreate.vue'
                    ),
            },
        ],
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'
            ),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
