<template>
  <div class="formWrapper">
    <div class="input">
      <el-input v-model="loginName" placeholder="请输入用户名" class="loginName"></el-input><br>
      <el-input v-model="password" placeholder="请输入密码" class="password"></el-input><br>
      <el-button type="primary" class="loginBtn" @click="onLoginClick">登 录</el-button>
      <el-button type="text">忘记密码</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginPage',
  data () {
    return {
      loginName: '',
      password: ''
    }
  },

  methods: {
    onLoginClick () {
      if(loginName === '' || password === '') {
        this.$message({
          showClose: true,
          message: '请将填写用户名密码',
          type: 'warning'
        });
      } else {
        
      }
      
    }
  }
}
</script>

<style scoped>

.formWrapper {
  margin: 20px 10%;
  background-color: white;
  min-width: 600px;
}

.input {
  /*border: solid black 1px;*/
  padding: 100px;

}
.loginName {
  margin-bottom: 10px;
  width: 300px;
}
.password {
  width: 300px;
}
.loginBtn{
  width: 100px;
  margin: 10px 0 0 100px;
}
</style>
