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
    history : createWebHashHistory('/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
    },
});

/* Set Document title and route meta */
const defaultDocumentTitle = 'Tailwindy';

router.afterEach((to) => {
    document.title = to.meta?.title
        ? `${to.meta.title} — ${defaultDocumentTitle}`
        : defaultDocumentTitle;
});

export default router;
