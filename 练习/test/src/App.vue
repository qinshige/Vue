<template>
  <div id="app">
<!--    <Server></Server>-->
<!--    <Server1></Server1>-->
<!--    <Server2></Server2>-->
        <router-view @yu="yuu" @love="oou" @wenzi="wenz"></router-view>
  </div>
</template>

<script>
  import Server from "./components/Servler";
  import Server1 from "./components/Server1";
  import Server2 from "./components/Server";
export default {
  name: 'app',
  data () {
    return {
      ghuu : {

      }
    }
  },
  methods : {
    yuu : function (data) {
      this.ghuu.sex = data;
    },
    oou : function (data) {
      this.ghuu.love = data;
    },
    wenz : function (data) {
      this.ghuu.xii = data;
      console.log(this.ghuu)
    }
  },
  components : {
    Server,
    Server1,
    Server2
  }
}
</script>

<style>

</style>
