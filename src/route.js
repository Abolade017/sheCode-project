import {createRouter, createWebHashHistory} from 'vue-router';
//import routes component
import Collections from './components/pages/Collections.vue';
import Men from '@/components/pages/Men.vue';
import Women from '@/components/pages/Women.vue';
import About from '@/components/pages/About.vue';
import Contact from '@/components/pages/Contact.vue';
// ?route path
const routes = [
    { path: '/collections', component: Collections, name:'collections' },
    { path: '/about', component: About, name:'about' },
    { path: '/men', component: Men, name:'men' },
    { path: '/women', component: Women, name:'women' },
    { path: '/contact', component: Contact, name:'contact' },
];
const router = createRouter({
    history:createWebHashHistory(),
    routes
  });
export default router;