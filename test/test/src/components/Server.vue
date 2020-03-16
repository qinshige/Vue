<template>
    <div id="add">
      <p>3.请介绍一下自己：</p>
      <form>
      <div id="tex">
        <textarea name="" id="" cols="30" rows="10" v-model="wenzi">
        </textarea>
      </div>
      <div class="sss">
        <input type="button" @click="guen" :disabled = "flag" value="提交">

          <button :disabled = "flag" @click="group" id="xia">
             上一步 
          </button>
    
        <input type="reset"  value="重置">
      </div>
      </form>
    </div>
</template>

<script>
    export default {
        name: "Server",
        data : function () {
          return {
            flag : false,
            wenzi: []
          }
        },
      methods : {
        guen : function () {
          this.$emit("wenzi",this.wenzi);
        },
        group : function () {
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
    #add{
      width: 300px;
      border:1px solid #42b983;
      padding-left: 12px;
    }
    #app .sss{
      padding: 200px 0 10px 0;
    }
</style>
