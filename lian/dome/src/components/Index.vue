<template>
    <div>
       <h1>我是首页</h1>
      <button @click="btn">进入仓库</button>
    </div>
</template>

<script>
    export default {
        name: "Index",
      methods:{
          btn(){
            this.$router.push({name:"repository"});
          }
      }
    }
</script>

<style scoped>

</style>
