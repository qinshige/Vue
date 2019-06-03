<template>
    <div id="ap">
      <p>2.请选择您的兴趣爱好：</p>
      <form action="#">
      <input type="checkbox" value="看书" v-model="arra"><label for="">看书</label>
      <input type="checkbox" value="游泳" v-model="arra"><label for="">游泳</label>
      <input type="checkbox" value="跑步" v-model="arra"><label for="">跑步</label>
      <input type="checkbox" value="看电影" v-model="arra"><label for="">看电影</label>
      <div class="sss">
        <router-link to="/Server">
        <button :disabled = "flag" id="xia" @click="lovehao">
          下一步
        </button>
        </router-link>
        <router-link to="/">
        <button>上一步</button>
        </router-link>
        <input type="reset"  value="重置" @click="aty">
      </div>
      </form>
    </div>
</template>

<script>
    export default {
        name: "Server1",
        data :function () {
          return  {
            arra : [],
            flag : false,
            ted : []
          }
        },
      methods : {
        aty : function(){
          this.arra = this.ted
        },
        lovehao : function () {
          this.$emit("love",this.arra);
        }
      },
      mounted (){
        if (this.arra.length == 0){
          this.flag = true
        }
      },
     updated() {
        if (this.arra.length == 2){
          this.flag = false
        }else{
          this.flag = true
        }
      }
    }
</script>

<style scoped>
    #ap {
      width: 300px;
      border: 1px solid #42b983;
      padding-left: 12px;
    }
    #app .sss{
      padding: 200px 0 10px 0;
    }
</style>
