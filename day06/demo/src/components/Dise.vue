<template>
    <div id="spp">
      <button @click="jian" :disabled="cur<=min">-</button>
            <input type="text" :value="cur" >
      <button @click="jia" :disabled="cur>=max">+</button>
    </div>
</template>
<script>
export default {
  data : function(){
    return {
      cur : this.value
    }
  },
    props : {
      max : {
        type : Number,
        default :Infinity
      },
      min : {
        type: Number,
        default: -Infinity
      },
      value : {
        type: Number,
        default: 0
      }
    },
  watch : {
     cur : function (val) {
       this.$emit('input',val);
     } 
  },
  methods :{
    jian : function () {
      this.cur--;
      if (this.cur < this.min){
        this.cur = this.min
      }
    },
    jia : function () {
      this.cur++;
      if (this.cur > this.max){
        this.cur = this.max
        return
      }
    }
  }
}
</script>
<style scoped>
   #spp{
     width:500px;
    padding: 10px;
     border: 1px solid #ff6600;
     margin: auto;
   }
</style>

