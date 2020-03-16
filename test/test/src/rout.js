import Server from "./components/Server";
import Server1 from "./components/Server1";
import Servler from "./components/Servler";

import Vue from 'vue';
import VueRouter from  "vue-router";
Vue.use(VueRouter);

export default new VueRouter({
  routes : [
    {path:"/Server",component:Server},
    {path:"/Server1",component:Server1},
    {path:"/",component:Servler}
  ],
    mode : 'history'
})
