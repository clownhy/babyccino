import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 基本依赖
import './assets/css/style.css';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);
app.use(router);
app.mount('#app');