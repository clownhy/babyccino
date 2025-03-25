import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/style.css';
import '@fortawesome/fontawesome-free/css/all.css'

// 确保bootstrap全局可用
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');