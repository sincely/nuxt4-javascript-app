<template>
  <div :style="cssVar">
    <!-- 首页加载全屏动画 -->
    <!-- <FullLoading v-if="isFullLoading" /> -->
    <NuxtLayout>
      <!-- 在页面导航之间显示一个进度条 -->
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()
const { cssVar } = useCss()

// 是否首次加载
const isFullLoading = ref(true)

nuxtApp.hook('page:start', () => {
  isFullLoading.value = true
})

nuxtApp.hook('page:finish', () => {
  isFullLoading.value = false
})

useHead({
  link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  meta: [
    { name: 'keywords', content: 'Nuxt.js网站' },
    { name: 'description', content: '致力于打造程序员的梦中情站' }
  ]
})
</script>

<style scoped>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  transform: translateX();
  font:
    14px/1.5 'Segoe UI',
    'Lucida Grande',
    Helvetica,
    Arial,
    'Microsoft YaHei',
    FreeSans,
    Arimo,
    'Droid Sans',
    'wenquanyi micro hei',
    'Hiragino Sans GB',
    'Hiragino Sans GB W3',
    Roboto,
    Arial,
    sans-serif;
}

html.dark {
  background: #222;
  color: white;
}
</style>
