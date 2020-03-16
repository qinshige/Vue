<template>
  <div>

    <div class="wai" hide-trigger="true" :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
      <div class="login">
        <form action="/login" method="get">
          <p><label for="">账号:</label> <Input v-model="register.input" prefix="ios-contact" placeholder="请输入账号" style="width: auto" /></p>
          <p><label for="">密码:</label> <Input v-model="register.password" prefix="ios-key-outline" type="password" placeholder="请输入密码" style="width: auto" /></p>
          <p><label for="">密码:</label> <Input v-model="register.password2" prefix="ios-key-outline" type="password" placeholder="确认密码" style="width: auto" /></p>
          <p class="deng">
            <el-button :plain="true" @click="send">注　册</el-button>
          </p>
            <div>上传头像</div>
          <div class="box">
            <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "register",
    data () {
      return {
        register:{},
        imageUrl: ''
      }
    },
    methods:{
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      send(){
        this.$axios.post("/signup",{
          user : this.register,
          imgdata:this.imageUrl
        }).then(res=>{
          console.log(res);
            let that = this;
          if(res.data.message == "注册成功"){
            this.$message({
              message:'注册成功',
                  center: true,
                  duration : 1000,
                  type : "success",
                  onClose(){
						          that.$router.push({name : 'login'})
					        }
            })
          }else if(res.data.message == "用户名已存在"){
             this.$message({
                message:'用户名已存在',
                center: true
            })
          }else if(res.data.message == "两次输入的密码不一致"){
               this.$message({
                message:'两次输入的密码不一致',
                center: true
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
  .wai{
    overflow: hidden;
  }
  .login{
    width: 500px;
    padding: 15px;
    height: auto;
    padding: 20px;
    margin:100px auto;
    border: 1px solid #42b983;
    background: floralwhite;
    border-radius: 5px;
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
   .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .box{
    border: 1px dashed #d9d9d9; width: 100px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>
