<template>
    <div id="app">
        <div class="conter">
          <div class="conter_left">
            <div class="conter_img">
              <img :src="imgo" alt="">
            </div>
               <ul class="conter_list" >
                 <li v-for="(item,index) in thumbnail" :key="al" @mouseover="tagg(index)">
                   <img :src="item">
                 </li>
               </ul>
            </div>
            <div class="conter_right">
             <h2>{{item.text}}</h2>
              <div class="banner-parice">
                  <p><w>价格 </w><span>￥{{item.price}}</span></p>
                  <p><w>促销</w> <span class="mayy">￥{{item.onlinePrice}}</span></p>
              </div>
              <div class="dizhi">
                  <p><span>发货地</span> {{item.address}}</p>
                  <p> <span>快递方式</span> {{item.type}}</p>
              </div>
              <div>
                <p class="shurukuang"><input type="number" value="1"></p>
                <p class="anniu"><button>立即购买</button> <button class="Obtn"><i class="fa fa-shopping-cart"></i>加入购物车</button></p>
              </div>
              <p class="bai"><span>服务承诺</span><span>正品保证</span><span>极速退款</span><span>赠运费险</span><span>七天无理由退换货</span></p>
            </div>
    </div>
    </div>
</template>

<script>
  import config from '@/config/config.js'
    export default {
      name: "Xq",
      data (){
        return {
          index : 0,
        }
      },
      methods:{
        tagg: function (al) {
          console.log(al);
         this.index = al;
        }
      },
       computed : {
         item () {
           return config.goods.find(item => item.name === this.$route.query.name);
         },
         thumbnail () {
           return this.item.thumbnails
         },
         imgo (){
           return this.item.images[this.index]
         },
         result () {
           return {
             cover: this.item.cover,
             text: this.item.text,
             type: this.item.type,
             price: this.item.onlinePrice,
             quantity: this.quantity
           }
         }
       },
    }
</script>

<style scoped>
      *{
        padding: 0; margin: 0;
      }
      #app{
        width: 100%;
      }
      #app .conter{
        width: 1120px;
        height: 500px;
        margin: 50px auto;

      }
      #app .conter .conter_left{
        width: 50%;
        float: left;
      }
      #app .conter .conter_right{
        width: 50%;
        float: right;

      }
      #app .conter .conter_right h2{
        padding:0 0 15px 0;
        font-size: 19px;
      }
      #app .conter .conter_right .banner-parice{
        width: 83%;
        background-color: #e9e9e9;
        background-image: url(data:image/png;base64,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);
        padding: 5px 12px;
      }
      #app .conter .conter_right .dizhi span{
          font-size : 12px;
          padding-right: 25px;
          color: #999;
      }
      #app .conter .conter_right .banner-parice p w{
        font-size:13px;
        color: #999;
      }
      #app .conter .conter_right .dizhi{
        margin-top: 25px;
        margin-bottom: 25px;
      }
      #app .conter .conter_right .dizhi p{
        font-size: 14px;
        line-height: 24px;

      }
      .shurukuang input{
        width: 120px;
        padding-left: 10px;
        line-height: 32px;
        outline:none;
        border: 1px solid #ccc;
      }
      #app .conter .conter_right .banner-parice p span{
        padding-left: 25px;
        font-size: 13px;
        color: #333;
      }
      #app .conter .conter_right .banner-parice p .mayy{
        font-size: 22px;
        color: #ff0036;
        font-weight: 600;
      }
      #app .conter .conter_right .banner-parice p{
        line-height: 24px;
      }
      #app .conter .conter_img{
        width: 100%;
        overflow: hidden;
        text-align: center;
      }
      #app .conter .conter_list{
        margin-top: 5px;
        margin-left: auto;
        margin-right: auto;
        width: 430px;
        list-style: none;

      }
      #app .conter .conter_list li{
        display: inline-block;
        width: 20%;
        cursor: pointer;
      }
  .anniu button{
    width: 200px;
    line-height: 36px;
    border: 1px solid #95bf47;
    color: #95bf47;
    outline: none;
    background: rgba(149, 191, 103, .1);
  }
      .anniu{
        margin-top: 25px;
      }
      .anniu .Obtn{
        background: #95bf47;
        color: #fff;
      }
      .anniu .Obtn i{
        padding-right: 5px;
      }
  .bai{
    margin-top: 20px;
  }
  .bai span{
    font-size: 14px;
    margin-left: 10px;
    color: #999;
  }
</style>
