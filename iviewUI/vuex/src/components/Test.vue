<template>
  <div class="app">
    <h1>我是Test组件：{{count1}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data () {
      return {
        // count1:0
      }
    },
    // created (){
    //   this.count = this.$store.state.count;
    // },
    computed : {
      count1 : function () {
        return this.$store.state.count
      }
    }
  }
</script>

<style scoped>

</style>
