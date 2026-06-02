<script setup>
const colorMode = useColorMode()
defineProps({
  name: {
    type: String,
    default: ''
  },
  lightFill: {
    type: String,
    default: ''
  },
  darkFill: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }
})

// 判断是否暗色模式
const isDark = colorMode.preference === 'dark'
</script>

<template>
  <Icon :name="name" :fill="isDark ? darkFill : lightFill" :class="className" />
</template>

<style>
.Icon svg {
  width: auto !important;
  height: auto !important;
  margin-bottom: 0 !important;
}
</style>
