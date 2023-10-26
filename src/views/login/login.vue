<script setup name="Login" lang="ts">
import NavBar from "@/components/NavBar/index.vue";
</script>

<template>
  <div class="bg p-5 flex flex-col justify-between">
    <div class="text-3xl font-medium">
      <div>欢迎登录</div>
      <div class="pt-2">盾管家小程序农业版</div>
    </div>
    <van-button type="primary" block>企业版登录</van-button>
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
}
</style>
