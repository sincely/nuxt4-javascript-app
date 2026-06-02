<script setup>
import { useTranslateX } from '@/composables/useAnime'
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
  leftText: {
    type: String,
    default: ''
  },
  mask: {
    type: Boolean,
    default: true
  }
})
const left = ref(null)
const right = ref(null)
const { instance: leftInstance } = useTranslateX({ el: left, from: -600, to: 0, delay: 0, duration: 600 })
const { instance: rightInstance } = useTranslateX({ el: right, from: 600, to: 0, delay: 600, duration: 200 })
const restart = () => {
  leftInstance.value?.restart()
  rightInstance.value?.restart()
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
      col-span-10
      md:col-span-6
      text-white
      z-3
      grid
      grid-cols-12
      items-center
    >
      <div
        ref="left"
        text-9xl
        font-500
        col-span-4
        text-right
        pr-3
      >
        <div v-if="props.leftText">
          {{ props.leftText }}
        </div>
        <slot
          v-else
          name="left"
        />
      </div>
      <div
        ref="right"
        text-left
        col-span-8
        flex
        flex-col
        items-start
      >
        <div
          font-500
          text-xl
          md:text-4xl
        >
          {{ props.topText }}
        </div>
        <div
          text-primary
          text-5xl
          md:text-8xl
          font-500
          b-b-2
          b-primary
        >
          {{ props.middleText }}
        </div>

        <!-- eslint-disable-next-line vue/no-v-html -->
        <div
          text-lg
          md:text-xl
          font-500
          mt-2
          md:mt-6
          tracking-wide
          v-html="props.bottomText"
        />
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
