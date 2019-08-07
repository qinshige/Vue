<template>
    <div>
      <h1>我是HOME组件:{{message}}</h1>
      <button @click="btn">BTN ADD</button>
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
      <br>
      <Index></Index>
      <Test></Test>
    </div>
</template>
<script>
  import Index from './Index';
  import Test  from './Test';
    export default {
        name: "Home",
        data : function () {
          return {
          }
        },
      methods:{
        btn : function () {
          var that = this;
          setTimeout(function () {
            that.$store.dispatch('att');
          },2000)
        }
      },
      computed : {
        message : function () {
          return this.$store.state.count
        },
        list:function () {
                      return this.$store.state.list.filter(function (item) {
                        return item < 10;
                      })
        }
      },
      components:{
          Index,
          Test
      }
    }
</script>

<style scoped>

</style>
