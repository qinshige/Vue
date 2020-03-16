import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './router.js'
Vue.use(vueRouter);
import "font-awesome/css/font-awesome.min.css";
const routers = new vueRouter({
  routes : router,
  mode : 'history'
})
new Vue({
  router : routers,
  el: '#app',
  render: h => h(App)
})
