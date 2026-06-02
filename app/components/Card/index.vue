<template>
  <div
    ref="cardRef"
    class="card hvr-buzz-out text-white p-6 md:(px-10 py-16)"
  >
    <div class="flex justify-center">
      <div
        :class="[icon]"
        class="text-6xl"
        :style="{ color }"
      />
    </div>
    <div class="card-name text-lg mt-2 md:(mt-8 text-2xl) text-primary">
      {{ name }}
    </div>
    <div class="card-text text-sm mt-2 md:(mt-6 text-base) tracking-wider">
      {{ text }}
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  delay: {
    type: Number,
    default: 1000
  },
  name: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
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

<style lang="scss" scoped>
.card {
  z-index: 20;
  margin-top: 30px;
  text-align: center;
  background: rgb(255 255 255 / 16%);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow:
    rgb(0 0 0 / 40%) 1px 2px 6px,
    rgb(0 0 0 / 30%) 10px 7px 13px 1px,
    rgb(0 0 0 / 20%) 1px -3px 3px inset;
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
  box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;
}
</style>
