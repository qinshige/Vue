<template>
    <div id="add">
<!--      1-->
      <div class="swiper-bg" :style="{backgroundColor: slidesColor[index]}">
      <div id="lim">
        <div class="add_left">
          <ul>
            <li v-for="(item,index) in arr">
<!--              <i>{{item.icon}}</i>-->
              {{item.text}}
            </li>
          </ul>
        </div>
<!--      2-->
      <div class="swiper">
        <Swiper :slides="ttymg" v-model="index"></Swiper>
      </div>
      </div>
`
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
          ttymg (){
              return config.goods.map(item => item.poster)
          },
        slidesColor () {
          return config.goods.map(item => item.color)
        },
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
    margin: auto;
    overflow: hidden;
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
    padding-left: 25px;
    cursor: pointer;
    color: #fff;
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
</style>
