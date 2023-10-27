<script setup lang="ts" name="Login">
import { ref } from "vue";
interface FormData {
  username?: string;
  password: string;
}
const loginData = ref<FormData>({
  username: "",
  password: ""
});
const checked = ref<boolean>(false);
</script>

<template>
  <div class="bg p-5 flex flex-col justify-between">
    <div class="text-3xl font-medium">
      <div>欢迎登录盾管家</div>
      <div class="pt-2">农业版本</div>
    </div>
    <div class="flex-1 py-10 flex flex-col justify-center">
      <div>
        <div class="bg-white rounded-lg px-2 mb-4 border border-green-400">
          <van-field
            clearable
            v-model="loginData.username"
            placeholder="请输入用户名"
          >
            <template #left-icon
              ><van-icon name="contact" size="22" class="text-gray-400"
            /></template>
          </van-field>
        </div>
        <div class="bg-white border rounded-lg px-2 mb-4 border-green-400">
          <van-field
            type="password"
            v-model="loginData.password"
            placeholder="请输入密码"
            clearable
          >
            <template #left-icon
              ><van-icon name="lock" size="22" class="text-gray-400"
            /></template>
            <template #right-icon>
              <van-icon name="eye" class="text-gray-400" size="24" /></template
          ></van-field>
        </div>
        <div class="flex justify-between text-sm">
          <span>立即注册</span>
          <span>忘记密码？</span>
        </div>
      </div>
      <div class="text-center text-sm mt-10">
        <div class="mb-2 flex justify-center">
          <span class="mr-1">保存您输入的账号与密码</span>
          <van-checkbox v-model="checked"></van-checkbox>
        </div>
        <van-button type="primary" block>企业版登录</van-button>
        <div class="text-sm flex justify-center mt-2">
          <van-checkbox v-model="checked"></van-checkbox>
          <div class="ml-1">
            阅读并同意
            <span class="underline text-green-500">
              《用户服务协议》与《隐私协议》
            </span>
          </div>
        </div>
        <div class="mt-2">个人登录</div>
      </div>
    </div>
    <div class="text-center">北京中集智冷科技有限公司</div>
  </div>
</template>
<style lang="less" scoped>
.bg {
  background-image: url("@/assets/images/login-bg.png");
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: cover;
  backdrop-filter: blur(144px);
  // background: linear-gradient(271deg, #5ddb31 0%, #c6f3b6 100%);
}
</style>
