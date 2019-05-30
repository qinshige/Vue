<template>

    <div class="kp">
      <textarea v-model="text" name="" id="" cols="30" rows="10">

      </textarea>
      <div class="qq">
        <button @click="Add">Add Quote</button>
      </div>
    </div>

</template>
<script>

    export default {
        data : function () {
          return {
            text: "",
          }
        },
      methods:{
        Add : function () {
          // 点击按钮 添加 事件
          // 传给 父组件
          this.$emit('add',this.text);
          this.text = ''; //完了之后 做 清空
        }
      }
    }

</script>

<style scoped>
    .kp{
      width : 1000px;
      margin : 10px auto;
      text-align: center;
    }
    .kp textarea{
      width : 800px;
      height : 100px;
    }
    .kp button{
      float: left;
      margin-left: 100px;
    }
</style>
