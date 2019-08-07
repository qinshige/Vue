<template>
    <div id="app">

      <h1>Index组件：{{count2}}</h1>
      <br>
      <button @click="increment">加</button>
      <button @click="subtract">减</button>
    </div>
</template>

<script>

    export default {
        name: "Index",
      data : function () {
        return{
          // count2 : 0
        }
      },
      // created (){
      //   this.count = this.$store.state.count;
      // },
      computed : {
        count2 : function () {
          return this.$store.state.count
        }
      },
      methods : {
        increment : function () {
          this.count =  this.$store.commit('increment');
        },
        subtract : function () {
          this.count = this.$store.commit('subtract');
        }
      }
    }
</script>

<style scoped>

</style>
