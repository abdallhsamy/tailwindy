import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'

createApp(App)
    .use(router)
    .mount('#app')


/* Set Document title and route meta */
const defaultDocumentTitle = 'Tailwindy';

router.afterEach((to) => {
    document.title = to.meta?.title
        ? `${to.meta.title} — ${defaultDocumentTitle}`
        : defaultDocumentTitle;
});
