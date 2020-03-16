<template>
    <div>
      <div class="wai" hide-trigger="true" :style="{margin: '88px 20px 0', background: '#fff', minHeight: 'auto'}">
        <div class="app">
          <p >欢迎：</p>
          <form action="/myaritcle" method="get">
            <span>标题:</span>
            <input type="text"placeholder="请输入标题" v-model="arr.title">
            <span>内容:</span>
            <textarea name="" id="" cols="30" rows="10" v-model="arr.content">

            </textarea>
            <template>
             <p v-model="arr.name"></p>
            </template>
          <el-button :plain="true" @click="send">发　表</el-button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
        name: "Publish",
        data:function(){
          return{
            arr:{},
          }
        },
      methods:{
          async send(){
            let name=sessionStorage.getItem('userName');
            let Session=sessionStorage.getItem('Session');
            let a = await this.$axios.post('/create', {
              newTitle:this.arr,name:name,id:Session
            }).then(res => {
              console.log(res);
              this.$router.push('/zrticle');
            })
          }
      }
    }
</script>

<style scoped>
.app{
  width: 1000px;
  height: 500px;
  border: 1px solid red;
  margin: auto;
  padding: 50px;
}
.app span,input,textarea{
  display: block;
}
.app textarea{
  word-wrap: break-word;
}
.app input{
  width: 370px;
  line-height: 40px;
  padding-left: 10px;
}
</style>
