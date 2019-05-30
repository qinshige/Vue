<template>
    <div id="app">
      <NeMoudel inline-template>
          <div>
              <h2>在父组件中定义子组件的模板</h2>
            <p>{{msg}}</p>
            <h3>{{message}}</h3>
          </div>
      </NeMoudel>
    </div>
</template>

<script>
  import NeMoudel from './components/NeMoudel'
    export default {
        name: "App2",
          data : function() {
            return {
              message : "在父组件中定义的数据"
            }

          },
        components : {
          NeMoudel
        },
      mounted () {
          console.log(this.message);
      }
    }
</script>

<style scoped>

</style>
