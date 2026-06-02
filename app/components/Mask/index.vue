<script setup>
const props = defineProps({
  background: {
    type: String,
    default: 'rgba(0,0,0,.2)'
  },
  zIndex: {
    type: Number,
    default: 2
  },
  anime: {
    type: Boolean,
    default: false
  },
  eventKey: {
    type: String,
    default: ''
  }
})

const maskRef = ref(null)
if (props.anime && props.eventKey) {
  const { instance: maskInstance } = useTranslateX({ el: maskRef, from: -1980, to: 0, delay: 0, duration: 1000 })
  const { $on } = useMitt()
  $on(props.eventKey, () => {
    maskInstance.value?.restart()
  })
}

const style = computed(() => {
  return {
    background: props.background,
    zIndex: props.zIndex
  }
})
</script>

<template>
  <div
    ref="maskRef"
    class="mask"
    full
    fixed
    left-0
    top-0
    mt-19
    :style="style"
  />
</template>

<style scoped lang="scss"></style>
