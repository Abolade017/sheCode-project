import { createApp } from 'vue';
import App from './App.vue';
import "./assets/css/tailwind.css";
import { createRouter, createWebHashHistory } from 'vue-router';
//import routes component
import Home from './components/pages/Home.vue';
import Collections from './components/pages/Collections.vue';
import Men from './components/pages/Men.vue';
import Women from './components/pages/Women.vue';
import About from './components/pages/About.vue';
import Contact from './components/pages/Contact.vue';
// ?route path
// const routes = [
//     { path: '/collections', component: Collections, name:'collections' },
//     { path: '/about', component: About, name:'about' },
//     { path: '/men', component: Men, name:'men' },
//     { path: '/women', component: Women, name:'women' },
//     { path: '/contact', component: Contact, name:'contact' },
// ];
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home, name: 'home' },
        { path: '/collections', component: Collections, name: 'collections' },
        { path: '/about', component: About, name: 'about' },
        { path: '/men', component: Men, name: 'men' },
        { path: '/women', component: Women, name: 'women' },
        { path: '/contact', component: Contact, name: 'contact' },
    ]
});
const app = createApp(App);
app.mount('#app');
app.use(router);