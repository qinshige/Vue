<template>
    <div id="add">
<!--      1-->
      <div class="swiper-bg" :style="{backgroundColor: slidesColor[index]}">
      <div id="lim">
        <div class="add_left">
          <ul>
            <li v-for="(item,index) in arr">
              <i :class="item.icon"></i>
              {{item.text}}
            </li>
          </ul>
        </div>
<!--      2-->
        <div class="swiper">
          <Swiper :slides="ttymg" v-model="index"></Swiper>
        </div>
      </div>
      </div>

      <div class="banner_one">
          <div class="banner">
            <h2>精品推荐</h2>
            <ul>
              <router-link to="/Xq">
                <li v-for="(item,index) in goods" :key="index" @click="tooglePage(item)">
                  <img :src=" item.cover ">
                  <h4>{{item.text}}</h4>
                  <p>原价：<span class="banner_span">{{item.price}}</span> 促销价：<span class="fot">￥{{item.onlinePrice}}</span></p>
                </li>
              </router-link>
            </ul>
          </div>
      </div>
    </div>
</template>

<script>

  import config from '../config/config'
  import Swiper from '../widgets/Swiper'
    export default {
        name: "Lunbo",
      components : {Swiper},
      data : function(){
        return {
          index : 0
        }
      },
      computed : {
          arr(){
            return config.navbars;
          },
          goods (){
            return config.goods
          },
          ttymg (){
              return config.goods.map(item => item.poster)
          },
        slidesColor () {
          return config.goods.map(item => item.color)
        },
      },
      methods : {
        tooglePage(item){
          this.$router.push({path : 'Xq',query:{name:item.name}});
          console.log(item.name);
        }
      }
    }

</script>

<style scoped>
  html,body,div,h1,h2,h3,h4,ul,li,input,span{
    margin: 0;padding: 0;
  }
  .swiper-bg {
    width: 100%;
    height: 500px;
    background-color: #e5e5e5;
  }

    #add{
      width: 100%;
      padding: 1px 0;
    }
  #lim{
    width: 1120px;
    margin: 0 auto;
  }
  #lim .add_left{
    width: 200px;
    height: 500px;
    background: rgba(0, 0, 0, 0.55);
    float: left;
    /*position: relative;*/
  }
  #lim ul {
    list-style: none;
  }
  #lim ul li{
    line-height: 35px;
    cursor: pointer;
    color: #fff;
    font-size: 12px;
    padding: .023rem 25px;
  }
  #lim ul li:hover{
    color: #787878;
    background-color: rgba(255, 255, 255, .8);
  }
  #lim .swiper{
    height:500px;
    background-color: #e8e8e8;
    margin:0 auto;
  }
  .banner_one{
    width: 100%;
    background: #eeeeee;
    padding: 35px 0;
  }
  .banner_one .banner{
    width: 1120px;
    background:#fff;
    padding:0 0 50px 0;
    margin: auto;
    overflow: hidden;
  }
  .banner_one  .banner ul{
    width: 100%;
    /*position: relative;*/
  }
  .banner_one .banner ul a{
    color: #000000;
  }
  .banner_one .banner ul li{
   width: 25%;
    float: left;
    text-align: center;
    list-style: none;
    cursor: pointer;
  }
  .banner_one .banner ul li img{
    width: 240px;
  }
  .banner_one  .banner ul li h4{
    width: 70%;
    text-align: center;
    margin: auto;
    font-size: 14px;

  }
  .banner_one .banner h2{
    margin: 25px 0;
    padding-left: 21px;
    font-size: 27px;
  }
  .banner_one  .banner ul li .banner_span{
    text-decoration: line-through;
  }
  .banner_one .banner ul li p{
    width: 57%;
    text-align: center;
    font-size: 14px;
    color: #888;
    margin: auto;
  }
  .banner_one .banner ul li p .fot{
    color: #ff0036;
    font-size: 16px;
    text-align: center;
  }
</style>
