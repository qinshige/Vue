<template>
  <div class="layout">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      menu-trigger="hover"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <el-menu-item index="1" class="eee">GtiHub</el-menu-item>

      <el-menu-item index="2" class="eee"  v-show="flag">
        <router-link :to="{name:'zrticle'}">
          全部文章
        </router-link>
      </el-menu-item>
      <el-menu-item index="3" class="eee">
        <router-link :to="{name:'index'}">
          首页
        </router-link>
      </el-menu-item>
      <el-menu-item index="4" v-show="flag" class="eee">
        <router-link :to="{name:'myaritcle'}">
          我的文章
        </router-link>
      </el-menu-item>
      <el-menu-item index="5" v-show="flag" class="eee">
        <router-link :to="{name:'publish'}">
          发表文章
        </router-link>
      </el-menu-item>
      <el-menu-item index="6" v-show="mag" class="eee">
        <router-link :to="{name:'register'}">
          注册
        </router-link>
      </el-menu-item>
      <el-menu-item index="7" v-show="mag" class="eee">
        <router-link :to="{name:'login'}">
          登录
        </router-link>
      </el-menu-item>
      <el-menu-item index="7" v-show="flag" class="eee">
        <p @click="sen">
          登出
        </p>
      </el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data:function(){
    return{
      flag : false,
      mag:true,
      heade:""
    }
  },
  methods:{
    sen(){
      sessionStorage.removeItem('userName');
      sessionStorage.removeItem('Session');
    this.$axios.get('/signout').then(res => {
         this.$router.push({name:'index'});
       })
     }
  },
  mounted(){
      if (sessionStorage.getItem("userName")){
        this.flag = true;
        this.mag = false;
        this.$router.push({name:'publish'})
      }else{
        this.flag = false;
        this.mag = true;
      }
  },
  updated() {
    if (sessionStorage.getItem("userName")){
      this.heade = sessionStorage.getItem("userName")
      this.flag = true;
      this.mag = false;
    }else{
      this.flag = false;
      this.mag = true;
    }
  }
}
</script>
<style>
  *{
    margin: 0;padding: 0;
  }
  .layout{
    height: 100%;
  }
  .el-menu-demo{
    width: 100%;
    position: fixed;
    top: 0px;
  }
  body{
    background:#fff;
    height: 100%;
  }
a{
  color: #ffffff;
}
  .eee{
    width: 150px;
    text-align: center;
  }

</style>
