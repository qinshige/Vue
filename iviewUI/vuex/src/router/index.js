import Vue from 'vue';
import Router from 'vue-router';
import Test from '@/components/Test';
import Home from "@/components/Home";
import Index from '@/components/Index';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: Test
    },
    {
      path:'/home',
      name:'home',
      component: Home
    },
    {
      path:'/index',
      name:'index',
      component:Index
    }
  ]
})
