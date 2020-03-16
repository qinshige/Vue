<template>
  <div id="app">
<!--     <my-Header></my-Header>-->

<!--     <ShowBlogs></ShowBlogs>-->
     <Blog></Blog>
     <router-view></router-view>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import ShowBlogs from './components/ShowBlogs';
  import Blog  from './components/Bolg';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    "myHeader" : Header,
     ShowBlogs,
     Blog
  }
}
</script>

<style>
#app {
    width: 100%;
}
</style>
