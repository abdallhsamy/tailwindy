import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue';

const routes = [
    {
        meta : {
            title : 'Home',
        },
        path : '/',
        name : 'home',
        component : Home,
    }
];

const router = createRouter({
    history : createWebHashHistory,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
    },
});

export default router;
