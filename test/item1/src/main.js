import Vue from 'vue'
  import App from './App'
  import router from './router/index.js'
  import vueRouter from 'vue-router'
  import "font-awesome/css/font-awesome.min.css";
Vue.use(vueRouter);
// Vue.config.productionTip = false
const routers = new vueRouter({
  routes : router,
  mode : 'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:routers,
  components: { App },
  template: '<App/>'
})
