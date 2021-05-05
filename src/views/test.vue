<template>
  <div class="test">
    测试页面

    <el-form ref="form" :model="user" :rules="rules" label-width="80px">
      <el-form-item label="手机号" prop="username">
        <el-input v-model="user.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" />
      </el-form-item>
      <el-form-item label="确认密码" prop="passwordTwo">
        <el-input v-model="passwordTwo" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const checkPassword = (rules, value, callback) => {
      if (value === this.user.password) {
        callback()
      } else {
        callback(new Error('两次密码不一致，请重新输入'))
      }
    }
    return {
      user: {
        passowrd: '',
        username: ''
      },
      passwordTwo: '',
      rules: {
        username: [
          { required: true, trigger: 'blur', message: '手机号不能为空' },
          { pattern: /^1[3-9]\d{9}$/, trigger: 'blur', message: '请输入11位手机号码' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '密码不能为空' },
          { min: 6, max: 16, trigger: 'blur', message: '密码为6-16位' }

        ],
        passwordTwo: [{ required: true, validator: checkPassword, trigger: 'blur' }]
      }
    }
  }

}
</script>

<style>

</style>
