<script setup>
import { useTranslateX, useTranslateY } from '@/composables/useAnime'
const props = defineProps({
  topText: {
    type: String,
    required: true
  },
  middleText: {
    type: String,
    required: true
  },
  bottomText: {
    type: String,
    required: true
  },
  backgroundUrl: {
    type: String,
    required: true
  },
  mask: {
    type: Boolean,
    default: true
  }
})
const top = ref(null)
const middle = ref(null)
const bottom = ref(null)
const { instance: middleInstance } = useTranslateX({ el: middle, from: -600, to: 0, delay: 0, duration: 600 })
const { instance: topInstance } = useTranslateY({ el: top, from: -60, to: 0, delay: 600, duration: 200 })
const { instance: bottomInstance } = useTranslateY({ el: bottom, from: 60, to: 0, delay: 600, duration: 200 })
const restart = () => {
  middleInstance.value?.restart()
  topInstance.value?.restart()
  bottomInstance.value?.restart()
}

defineExpose({ restart })
</script>

<template>
  <Mask v-if="props.mask" />
  <div
    class="full CarouselOne relative grid grid-cols-12"
    :style="{ backgroundImage: `url(${props.backgroundUrl})` }"
  >
    <div
      col-span-1
      md:col-span-3
    />
    <div
      text-center
      col-span-10
      md:col-span-6
      flex
      flex-col
      items-center
      justify-center
      text-white
      z-3
    >
      <div
        ref="top"
        font-500
        text-xl
        md:text-4xl
      >
        {{ props.topText }}
      </div>
      <div
        ref="middle"
        text-primary
        text-5xl
        md:text-8xl
        font-500
        b-b-2
        b-primary
      >
        {{ props.middleText }}
      </div>
      <div
        ref="bottom"
        text-lg
        md:text-xl
        font-500
        mt-2
        md:mt-6
      >
        {{ props.bottomText }}
      </div>
    </div>
    <div
      col-span-1
      md:col-span-3
    />
  </div>
</template>

<style scoped lang="scss">
.CarouselOne {
  // background-image: url("/carousel1.jpg");
}
</style>
