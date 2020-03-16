<template>
    <div>
      <div class="wai" hide-trigger="true" :style="{margin: '88px 20px 0', background: '#fff', minHeight: 'auto'}">
      <span class="title">{{blog.title}}</span>&nbsp;&nbsp;&nbsp;
      <span class="author">{{blog.name}}</span>
      <span class="times">{{blog.moment}}</span>
      <div>{{blog.md}}</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "SingleBlog",
         data(){
          return {
            id:this.$route.params.id,
            blog:{}
          }
         },
      created() {
        this.$axios.get('/singleblog/'+ this.id).then(res => {
          console.log(res);
          this.blog = res.data;
        })
      }
    }
</script>

<style scoped>

</style>
