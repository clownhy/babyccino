import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Bootstrap
import './bootstrap';

// 基本依赖
import './assets/css/style.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');