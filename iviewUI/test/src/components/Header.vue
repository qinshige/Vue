<template>

 <div id="add">
   <h3>Quotes Added</h3>
   <div class="progress">
     <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{width: value}">
      {{arrayText.length}}/{{maxLength}}
     </div>
   </div>
 </div>

</template>

<script>
    export default {
        name: "Header",
        // 接收 父组件 传过来的 值
        props : ['maxLength','arrayText'],

      computed :{
          value : function(){
            return this.arrayText.length / this.maxLength * 100+"%"
          }
      }
    }
</script>

<style scoped>
  #add{
    width: 1000px;
    margin: 10px auto;
  }
</style>
