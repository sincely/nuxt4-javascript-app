<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  time: {
    type: Number,
    default: 0.5
  }
})
const rootRef = ref()
const _text = ref('')
const append = () => {
  // 清空旧数据
  rootRef.value && (rootRef.value.innerText = '')
  if (!rootRef.value) {
    return
  }
  for (let index = 0; index < props.text.length; index++) {
    const span = document.createElement('span')
    span.className = 'dynamic-text-span'
    span.textContent = props.text[index]
    span.style.animation = `fade ${props.time}s both`
    span.style.animationDelay = `${index * 0.02}s`
    rootRef.value.append(span)
  }
}
onMounted(() => {
  append()
})
defineExpose({ append })
</script>

<template>
  <div
    ref="rootRef"
    class="Marquee"
  >
    <span class="Marquee-div">{{ _text }}</span>
  </div>
</template>

<style scoped lang="scss">
.Marquee {
  &-div {
    display: inline-block;
    color: white;
    animation: fade 0.5s both;
  }
}
</style>

<style>
@keyframes fade {
  0% {
    opacity: 0;
  }

  65% {
    text-shadow: 0 0 16px white;
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    opacity: 0.8;
  }
}
</style>
