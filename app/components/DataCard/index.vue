<script setup>
const props = defineProps({
  delay: {
    type: Number,
    default: 500
  },
  eventKey: {
    type: String,
    default: ''
  }
})
const { $on } = useMitt()
const cardRef = ref(null)
const { instance: cardInstance } = useTranslateY({ el: cardRef, from: -600, to: 0, delay: props.delay, duration: 600 })
const restart = () => {
  cardInstance.value?.restart()
}

$on(props.eventKey, () => {
  cardInstance.value?.restart()
})
defineExpose({ restart })
</script>

<template>
  <div
    ref="cardRef"
    class="card hvr-buzz-out text-white p-6 md:(px-10 py-16)"
  >
    <div class="flex justify-center text-6xl">
      <slot name="icon" />
    </div>
    <div class="text-2xl mt-2 md:(mt-8 text-5xl) text-primary">
      <slot name="data" />
    </div>
    <div class="text-sm mt-1 md:(mt-3 text-lg) tracking-wider text-gray-3">
      <slot name="descript" />
    </div>
    <div class="text-sm mt-2 md:(mt-6 text-lg) tracking-wider">
      <slot name="subscript" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  z-index: 20;
  text-align: center;
  background: rgb(255 255 255 / 6%);
  backdrop-filter: blur(30px);
  border-radius: 10px;
  box-shadow:
    rgb(0 0 0 / 40%) 1px 2px 6px,
    rgb(0 0 0 / 30%) 10px 7px 13px 1px,
    rgb(0 0 0 / 20%) 1px -3px 3px inset;
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
  box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;
}
</style>
