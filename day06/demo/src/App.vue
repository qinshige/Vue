<template>

  <div id="app">
      <Dise v-model="curt" :max="10" :min="0" @input="getData"> </Dise>
  </div>
</template>

<script>
  import Dise from './components/Dise'
export default {
  name: 'app',
  data () {
    return {
        curt: 5
    }
  },
  components : {
    Dise
  },
 methods : {
    getData : function(data){
        console.log(data);
    }
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
