// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入公共样式
import 'element-ui/lib/theme-default/index.css'
import Element from 'element-ui'
import VueParticles from 'vue-particles'
Vue.use(VueParticles);
Vue.use(Element);
import Axios from 'axios'
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'http://localhost:3000';
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
