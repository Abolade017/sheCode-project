import { createApp } from 'vue';
import App from './App.vue';
import "./assets/css/tailwind.css";
import router from './route';


const app = createApp(App);
app.mount('#app');
app.use(router);