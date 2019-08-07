<template>
  <div id="app">
    <div class="one">
      <div class="center">
        <div class="center_left"><span>你好,&nbsp;&nbsp;游客</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>消息&nbsp;0</span></div>
        <div class="center_right">
          <ul>
            <li>
              <router-link to="/Cart">
                我的订单
              </router-link>
            </li>
            <li>
              <router-link to="/Order">
                <i class="fa fa-shopping-cart "></i>
                购物车
              </router-link>
            </li>

            <li>收藏夹</li>
            <li>商家入口</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="tow">
      <router-link to = "/"><div class="log_left"></div></router-link>

      <div class="tow_right">
        <input type="text" class="input" placeholder="请输入 商店/店铺">
        <span class="btn">搜索</span>
      </div>
    </div>

    <router-view></router-view>

  </div>
</template>
<script scoped>
  import Lunbo from './components/Lunbo';
  import Catt from './components/Cart';
  import Order from './components/Order';
  import Xq from "./components/Xq"
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods : {
      // tiao : function () {
      //   this.$router.push({path : '/'})
      // }
    },
    components : {
      Lunbo,
      Catt,
      Order,
      Xq
    }
  }
</script>

<style>
  html,body,div,h1,h2,h3,h4,ul,li,input,span{
    margin: 0;padding: 0;
  }
  #app{
    width: 100%;
  }
  #app .one{
    width:100%;
    height: 30px;
    background:#f2f2f2;
    font-size: 12px;
    color: #999;
  }
  #app .one .center{
    width: 1120px;
    background: #eeeeee;
    margin:0 auto;
    overflow: hidden;
    height: 30px;
  }
  #app .one .center ul{
    list-style: none;
  }
  #app .one .center ul li{
    float: left;
    margin-right:15px;
    cursor: pointer;
    /*鼠标移入禁用*/
    cursor: not-allowed;
  }
  #app .one .center ul li a{
    color: #999;
    text-decoration: none;
  }
  #app .one .center .center_left{
    float: left;
    line-height: 30px;
  }
  #app .one .center .center_right{
    float: right;
    line-height: 30px;
  }
  #app .tow{
    width: 1120px;
    margin: auto;
  }
  #app .tow .log_left{
    display: inline-block;
    background-image: url("./assets/images/logo.png");
    background-repeat:no-repeat;
    background-size: cover;
    width: 188px;
    height: 75px;
    cursor: pointer;
    margin: 10px 0;
  }
  #app .tow .tow_right{
    display: inline-block;
    line-height: 100px;
    float: right;
  }
  #app .tow .tow_right input{
    width: 240px;
    line-height: 30px;
    padding-left: 5px;
    border: 2px solid #95bf47;
    vertical-align: middle;
    outline: none;
  }
  #app .tow .tow_right span {
    display: inline-block;
    line-height: 34px;
    padding-left: 15px;
    padding-right: 15px;
    color: #fff;
    vertical-align: middle;
    background:#95bf47;
    margin-left: -5px;
    cursor: pointer;
  }

</style>
