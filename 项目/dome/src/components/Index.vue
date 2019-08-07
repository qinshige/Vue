<template>
  <div id="app">
    <div>倒计时{{t}}</div>
    <div>分数{{fs}}</div>
    <div v-if="t<=0">游戏结束</div>
    <div id="main" v-bind:style="{width:x*w+'px',height:y*h+'px'}">
      <div class="ds" v-bind:class="{dd:v==s}" v-on:click="da(v)" v-for="v in x*y" v-bind:style="{width:w+'px',height:h+'px'}">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        x: 6,//地鼠格列数
        y: 4,//地鼠格行数
        w: 90,//地鼠格宽度
        h: 95,//地鼠格高度
        t: 60,//时间
        dsq: null,
        dsq2: null,
        s: 0,//地鼠位置
        fs: 0,
        ys: true,//用于解决游戏结束点击继续得分问题
        ty: false//用于解决连击得分问题
      }
    },
    methods: {
      da(i) {
        if (this.s == i && this.ys && this.ty) {
          this.ty = false;
          this.fs++;
        }
      }
    },
    created() {
      this.dsq = setInterval(() => {
        this.t--;
        if (this.t <= 0) {
          clearInterval(this.dsq);
          clearInterval(this.dsq2);
          this.ys = false;
        }
      }, 1000);
      this.dsq2 = setInterval(() => {
        this.ty = true
        this.s = parseInt(Math.random() * this.x * this.y);
      }, 1500);
    }
  }
</script>

<style scoped>
  *{margin: 0;padding: 0;}
  #app{
    width: 70%;
    margin: 100px auto;
    border: 1px solid #20a0ff;
  }
  #main{background:#42b983}
  .ds{float: left;box-sizing: border-box;}
  .dd{background-image: url("../assets/DS.jpg");background-size: cover;}
</style>
