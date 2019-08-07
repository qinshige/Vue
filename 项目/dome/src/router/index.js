import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Zrticle from '@/components/Zrticle'
import Publish from '@/components/Publish'
import Index from '@/components/Index'
import SingleBlog from '@/components/SingleBlog'
import MyAritcle from '@/components/MyAritcle'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/singleblog/:id',
      name: 'singleblog',
      component: SingleBlog
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/myaritcle',
      name: 'myaritcle',
      component: MyAritcle
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/zrticle',
      name: 'zrticle',
      component: Zrticle
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish
    }
  ],
  mode : 'history'
});
