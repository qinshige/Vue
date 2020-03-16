
import VueResource from 'vue-resource'
import App from './App.vue'
import Bmob from "hydrogen-js-sdk";
// 挂载到全局使用
Vue.prototype.Bmob = Bmob;

import Vue from 'vue'
import VueRouter from 'vue-router'
//引入
import Routes from './routes'
Vue.use(VueRouter);
//创建路由
const router = new VueRouter({
  routes : Routes,
  mode : 'history'
})
new Vue({
  el: '#app',
  render: h => h(App),
  router : router
})



//自定义属性
  Vue.directive('clak',{
    bind(el,binding,vnode){
      el.style.color = '#' + Math.random().toString(16).slice(2,8);
    }
  })
  Vue.directive('theme',{
    bind(el,binding,vnode){
      el.style.background = "#"+ Math.random().toString(16).slice(2,10);
    }
  })
  Vue.filter("toup",function (value) {
     return value.toUpperCase();
  })
Vue.filter("snippet",function (value) {
  return value.slice(0,100)+"...";
})
Vue.use(VueResource);
