import Vue from 'vue'
import App from './App.vue'
import router from "./rout"
import VueRouter from  "vue-router";
Vue.use(VueRouter);
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
