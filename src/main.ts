import Vue from 'vue';
import App from './app';
import router from './router';
import store from './store';

import './styles/main.scss';

Vue.config.productionTip = false;

const instance = new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App),
});

if (instance) {
  console.log('started');
}
