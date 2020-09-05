import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import './plugins/firebase';
import '@mdi/font/css/materialdesignicons.css';
import date from '@/filters/date';

Vue.config.productionTip = false;
Vue.filter('date', date);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
