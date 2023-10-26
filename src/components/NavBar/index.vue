<script setup lang="ts">
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";
import { ref } from "vue";
import SideMenu from "../SideMenu/sideMenu.vue";
const onClickRight = () => {
  useToggleDarkMode();
};
const showMenu = ref<boolean>(false);
const toggeleMenus = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <van-nav-bar fixed placeholder @click-right="onClickRight">
    <template #left>
      <van-icon name="apps-o" size="24" @click="toggeleMenus" />
    </template>
    <template #right>
      <svg-icon class="text-[18px]" :name="useDarkMode() ? 'light' : 'dark'" />
    </template>
  </van-nav-bar>
  <SideMenu :showMenu="showMenu" @onClickOverlay="toggeleMenus" />
</template>

<style scoped></style>
