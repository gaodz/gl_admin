<template>
  <div class="login">
    <el-form :inline="true" :model="loginForm" class="login-form">
      <el-form-item label="账号">
        <el-input v-model="loginForm.userName" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="passWord" v-model="loginForm.passWord" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import { createApp } from 'vue' 
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css'; 
export default {
  components: {},
  data() {
    return {
      loginForm: {
          userName: '',
          passWord: ''
        }
    }
  },

  mounted() {
 
  },
  methods: {
   onSubmit() {
        console.log('submit!',this.$route);
         // window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
         this.$router.push('/home')
      }
  }
}
</script>

<style scoped>
.login {
overflow: hidden;
height: 100%;
/*background-image: url('../../assets/images/login_background.png');
background-repeat:no-repeat;
background-position:left;
background-origin:content-box;
background-size:100%;*/
background-color: #36D8DB;
}
.login-form {
    position: absolute;
    top: calc(50% - 60px);
    left: calc(50% - 270px);
 }
</style>
