<template>
  <div class="app">
    <Content class="wai" hide-trigger="true" :style="{margin: '88px 20px 0', background: '#fff', minHeight: 'auto'}">
      <ul v-for="(item,index) in arr"  :key="index"  class="my-ul">
        <li class="my-li">
          <div class="one"><span class="title">{{item.title}}</span>&nbsp;&nbsp;&nbsp; <span class="author">{{item.name}}</span><span class="times">{{item.moment}}</span></div>
          <div>{{item.md}}</div>
        </li>
      </ul>
    </Content>
  </div>
</template>
<script>
    export default {
        name: "MyAritcle",
      data(){
          return{
            arr:{},
          }
      },
      created(){
        let taht = this;
        let name=sessionStorage.getItem('userName');
        const a = this.$axios.post('/mywz', {name:name}).then(res => {
          taht.arr = res.data;
          console.log(res.data)
        })
        console.log("请求文章---" + a);
        this.seccess = a;
      },

      methods:{

      },
    }
</script>

<style scoped>
  .wai{
    border: 1px solid #d9d9d9;
    border-radius: 5px;
  }
  .my-ul{
    width: 800px;
    border: 1px solid #8c939d;
    list-style: none;
    margin:0 auto;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
  }
  .my-li .one .title{
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 15px;
    padding: 10px;
  }
  .my-li .one span{
    display: inline-block;
  }
  .my-li .one .times{
    float: right;
  }
</style>
