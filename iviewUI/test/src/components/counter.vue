<template>

    <div id="app" v-if="arrayText.length">
        <div class="wo" v-for="(item,index) in arrayText" @click="dele">
            {{item}}
        </div>
    </div>

</template>

<script>
    export default {
        name: "counter",
        props : ['arrayText'],
        methods : {
          // 设置 删除 事件
          dele : function(index){
            this.$emit('del',index);
          }
      },
    }
</script>

<style scoped>
      div{
        width: 1000px;
        padding: 10px ;
        overflow: hidden;
      }
     div.wo{
        width: 200px;
        line-height: 80px;
        border-radius: 5px;
        border: 1px solid #000000;
        float: left;
        margin-left: 10px;
        cursor: pointer;
      }
      div.wo:hover {
        background: #ff6600;opacity: 0.5;}
</style>
