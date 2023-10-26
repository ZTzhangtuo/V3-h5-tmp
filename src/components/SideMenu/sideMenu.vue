<script setup lang="ts">
interface Props {
  showMenu: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits(["onClickOverlay"]);
const onClickOverlay = () => {
  emit("onClickOverlay");
};
</script>

<template>
  <van-popup
    :show="props.showMenu"
    position="left"
    :style="{ width: '40%', height: '100%' }"
    @click-overlay="onClickOverlay"
    >内容</van-popup
  >
</template>

<style scoped></style>
