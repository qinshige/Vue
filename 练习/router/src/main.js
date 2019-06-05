import Vue from 'vue';
import App from './App.vue';

import router from './router';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routers = new VueRouter({
  routes : router,
  mode : 'history'
})

new Vue({
  router:routers,
  el: '#app',
  render: h => h(App)
})
