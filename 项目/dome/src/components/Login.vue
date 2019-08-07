<template>
  <div>
    <div class="wai">
      <div class="we">
        <clock></clock>
      </div>
      <div class="login">
        <form action="/login" method="get" @submit.prevent="send">
          <p>
            <label for="userName">账号:</label>
            <el-input placeholder="请输入账号" id="userName" v-model="login.input">

            </el-input>
          </p>
          <p>
            <label for="pass">密码:</label>
            <el-input placeholder="请输入密码" id="pass" v-model="login.password">

            </el-input>
          </p>
          <p class="deng">
             <button  class="tn" @submit="send">登　陆</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import Clock from 'vue-clock2';
    export default {
        name: "Login",
      data () {
        return {
         login:{},
        }
      },
      components: { Clock },
      methods:{
        async send(){
				let a = await this.$axios.post("/signin",{data : this.login});
          console.log(a)
				 if(a.data.message == "登陆成功"){
					 let that = this;
					 this.$message({
						 message : "登陆成功",
						 duration : 1000,
						 onClose(){
							 that.$router.push({name : 'zrticle'})
						 }
           });
           //将用户名和token放入sessionStorage
           sessionStorage.setItem("userName",a.data.res);
           sessionStorage.setItem("Session",a.data.session);
				 }else{
					 this.$message({
						message : "用户名或密码错误",
						duration : 1000
					})
				 }
			}
      }
    }
</script>

<style scoped>
  .we{
   margin: 100px 0 0 100px;
  }
  .login{
    width: 400px;
    padding: 15px;
    height: 500px;
    border: 1px solid #42b983;
    border-radius: 5px;
    position: absolute;
    right: 55px;
    bottom: 55px;
  }
  .tn{
    width: 50%;
    line-height: 30px;
    border-radius: 5px;
    background-color: #20a0ff;
    color: #fff;
    border: none;
    outline-style: none;
  }
  .tn:hover{
    border: solid 1px #20a0ff;
    cursor: pointer;
  }
  label{
    display: inline-block;
  }
  #userName{
    width: 60%;
    padding: 10px 0;
  }
  #pass{
    width: 60%;
  }
  .login p{
    margin-top: 20px;
  }
  .login p label{
    font-size: 15px;
  }
  .login p input{
    display: inline-block;
  }
  .login .deng{
    padding-left: 38px;
  }
</style>
