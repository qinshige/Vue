<template>
    <div id="app">
        <button @click="changeView('A')">切换到A</button>
        <button @click="changeView('B')">切换到A</button>
        <button @click="changeView('C')">切换到A</button>
    </div>
</template>

<script>
  import ComA from './components/ComA'
  import ComB from './components/ComB'
  import ComC from './components/ComC'
  export default {
        name: "App3",
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        currentView : "ComA"
      }
    },
    methods : {
      changeView : function(data){
        console.log(data)
        this.currentView = "Com" + data;
      }
    },
    components : {
      ComA,
      ComB,
      ComC
    }
    }
</script>

<style scoped>

</style>
