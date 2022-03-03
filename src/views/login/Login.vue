<!-- 登录页面 -->
<template>
  <div class="wrap">
    <h1 class="title">网易云音乐</h1>
    <div class="login">
    <el-form :model="ruleForm" ref="ruleForm" label-width="80px" size="medium">
      <el-form-item label="手机号" prop="phoneNumber"><el-input v-model="ruleForm.phoneNumber"></el-input></el-form-item>
      <el-form-item label="密码" prop="password"><el-input v-model="ruleForm.password"></el-input></el-form-item>
      <el-form-item>
        <el-button @click="login">登录</el-button>
        <el-button @click="register">注册</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
import { getCheck } from '@/api/login'
import { MessageBox } from 'element-ui'
export default {
  data () {
    return {
      ruleForm: {
        phoneNumber: '',
        password: ''
      }
    }
  },
  created () {
  },
  methods: {
    // 验证手机号的格式
    testPhoneNumber () {
      return /^1[35789]\d{9}$/.test(this.ruleForm.phoneNumber)
    },
    testPassword () {
      return this.ruleForm.password > 6
    },
    login () {
      if (this.testPhoneNumber() && this.testPassword()) {
        const res = getCheck(this.ruleForm.phoneNumber)
        console.log(res)
      } else {
        MessageBox.alert('请输入正确的手机号和密码')
      }
    },
    register () {
    }
  }
}
</script>

<style scoped lang="scss">
.title{
  font-size: 30px;
  padding: 50px 0 0 40px;
}
.login{
  display: flex;
  justify-content: center;
  margin-top: 200px;
}
label.el-form-item__label,.el-button {
  font-size: 18px;
}
</style>
