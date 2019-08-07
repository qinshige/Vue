import Vue from 'vue'
import App from './App'
import router from './router'
//第一步  引入 mint-ui;
import MintUI from 'mint-ui'
Vue.use(MintUI)
//第二步 引入 Css样式
import 'mint-ui/lib/style.css'
import Ajax from './utils/ajax'
Vue.use(Ajax, {
  baseURL: 'http://65.49.197.99:3000/'
})

//第三步 引入vue-touch
import VueTouch from 'vue-touch'

VueTouch.config.swipe = {
  direction: 'horizontal'
}
Vue.use(VueTouch, {
  name: 'v-touch'
})

//第四步 引入公共样式
import './assets/css/base.css'
Vue.config.productionTip = false

import store from './store/index'

import vuescroll from 'v-scroll'
Vue.use(vuescroll)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
document.addEventListener('contextmenu', event => {
  event.preventDefault()
  event.stopPropagation()
})
