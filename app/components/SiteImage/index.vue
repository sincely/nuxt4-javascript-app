<template>
  <NuxtImg
    v-if="isValidImageUrl(url)"
    :src="url"
    alt="logo"
    :width="size"
    :height="size"
  />
  <Icon
    v-else
    :name="url"
    :size="String(size)"
    :color="color"
  />
</template>

<script setup>
defineProps({
  url: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 40
  },
  color: {
    type: String,
    default: ''
  }
})

// 判断地址是否是合法的图片地址
const isValidImageUrl = (url) => {
  const urlPattern = /^(https?:\/\/)[\da-z.-]+\.([a-z.]{2,6})([/\w .-]*\.(jpg|jpeg|png|gif|svg))$/i
  return urlPattern.test(url)
}
</script>
