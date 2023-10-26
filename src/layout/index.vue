<script setup lang="ts">
import tabbar from "@/components/Tabbar/index.vue";
import NavBar from "@/components/NavBar/index.vue";
import { useCachedViewStoreHook } from "@/store/modules/cachedView";
import { useDarkMode } from "@/hooks/useToggleDarkMode";
import { computed, ref } from "vue";

const cachedViews = computed(() => {
  return useCachedViewStoreHook().cachedViewList;
});
const themeVars = ref({
  // rateIconFullColor: "#07c160",
  // sliderBarHeight: "4px",
  // sliderButtonWidth: "20px",
  // sliderButtonHeight: "20px",
  // sliderActiveBackground: "#07c160",
  // buttonPrimaryBackground: "#07c160",
  // buttonPrimaryBorderColor: "#07c160"
  primaryColor: "#12B858",
  buttonPrimaryBackground: "#E3F6EB",
  buttonPrimaryColor: "#12B858",
  buttonNormalFontSize: "18px",
  buttonPrimaryBorder: "#12B858",
  //switch
  switchOnBackgroundColor: "#12B858",
  switchBackgroundColor: "#E7E7E7",
  loadingSpinnerColor: "#12B858",
  checkboxCheckedIconColor: "#12B858",
  warn: "#E3F6EB",
  radiusMd: "8px"
});
</script>

<template>
  <div class="app-wrapper">
    <van-config-provider
      theme-vars-scope="global"
      :themeVars="themeVars"
      :theme="useDarkMode() ? 'dark' : 'light'"
    >
      <!-- <nav-bar /> -->
      <router-view v-slot="{ Component }">
        <keep-alive :include="cachedViews">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <!-- <tabbar /> -->
    </van-config-provider>
  </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";

.app-wrapper {
  .clearfix();
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
