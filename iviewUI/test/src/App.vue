<template>

    <div id="app">
      <my-header :maxLength="maxLength" :arrayText="arrayText"></my-header>
<!--      父组件 接收 子组件 传过来的 add方法-->
      <my-center @add="getText"></my-center>
      <my-counter :arrayText="arrayText" @del="getIndex"></my-counter>
      <div class="tur">
        Info: Click on a Quote to delete it!
      </div>
    </div>

</template>

<script>

  import header from './components/Header';
  import center from  './components/centre';
  import counter from  './components/counter';

export default {
  name: 'app',
  data :function (){
    return {
        maxLength : 10,
        arrayText : ['addasad']
    }
  },
  components : {
    "my-header" : header,
    "my-center" : center,
    "my-counter" : counter
  },
  methods : {
    getText : function (data) {
      if (this.arrayText.length >= this.maxLength) {
        return alert('请先删除再添加');
      }
      this.arrayText.push(data)
    },
    getIndex : function(index){
      this.arrayText.splice(index,1);
    }
  }
}
</script>

<style>
#app{
  margin: 0 auto;
  width: 1000px;
}
  #app .tur{
    height: 45px;
    line-height: 45px;
    text-align: center;
    background: #d9edf7;
    border:1px solid #bce8f1;
    color: #31708f;
    margin: 20px 0;
    border-radius: 5px;
  }
</style>
