<template>
    <div id="app">
      <p>1.请问您的性别是：</p>
      <form action="#">
        <input type="radio" id="Nan" value="男" v-model="bog.arr"> <label for="Nan">男</label>
        <input type="radio" id="Nv"  value="女" v-model="bog.arr"> <label for="Nv">女</label>
        <input type="radio" id="Bao" value="保密" v-model="bog.arr"> <label for="Bao">保密</label>
        <div class="sss">
          <router-link to="/Server1">
          <button :disabled = "flag" @click="fun" id="xia">
            下一步
          </button>
          </router-link>
          <input type="reset"  value="重置"  @click="aty">
        </div>
      </form>
    </div>
</template>

<script>
    export default {
        name: "Servler",
       data : function(){
          return {
             flag : false,
             bog : {
               arr : [],
               ted :[]
             }
          }
       },
      methods : {
        aty : function(){
          this.bog.arr = this.ted
        },
        fun : function () {
          this.$emit("yu",this.bog.arr);
        }
      },
      mounted (){
        if (this.bog.arr.length == 0){
          this.flag = true
        }
      },
      updated() {
        if (this.bog.arr.length != 0){
          this.flag = false
        }else{
          this.flag = true
        }
      }
    }
</script>

<style scoped>
  #app{
    width: 300px;
    border: 1px solid #42b983;
    padding-left: 12px;
  }
  #app .sss{
   padding: 200px 0 10px 0;
  }
</style>
