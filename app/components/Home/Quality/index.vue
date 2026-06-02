<script setup>
const technicalRef = ref(null)
const securityRef = ref(null)
const technicalModuleRef = ref(null)
const securityModuleRef = ref(null)
const { instance: leftInstance } = useTranslateX({ el: technicalModuleRef, from: -600, to: 0, delay: 0, duration: 600 })
const { instance: rightInstance } = useTranslateX({ el: securityModuleRef, from: 600, to: 0, delay: 0, duration: 600 })
const { $on, MITT_KEY } = useMitt()
$on(MITT_KEY.CHANGE_TO_QUALITY, () => {
  technicalRef.value?.append()
  securityRef.value?.append()
  leftInstance.value?.restart()
  rightInstance.value?.restart()
})
</script>

<template>
  <!-- 12行 -->
  <div class="quality full text-white pt-19 grid grid-rows-12">
    <!-- 12列 -->
    <div class="grid grid-cols-12 h-full row-span-12 mt-6 md:(row-span-6 row-start-5 mt-0)">
      <!-- 模块 -->
      <div
        ref="technicalModuleRef"
        class="card md:!col-start-2"
      >
        <div class="card-title">
          技术认证
        </div>
        <div class="card-descript">
          Technical certification
        </div>
        <Marquee
          ref="technicalRef"
          class="card-content leading-8!"
          text="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp拥有国际TS 16949体系,TS 16949质量管理体系要求是由美国三大汽车公司克莱斯勒、福特和通用汽车公司共同制订，于1994年颁布的一套完整的质量体系标准,它包括ISO 9001的所有要求，并增加了与汽车行业相关的特定要求;"
        />
      </div>

      <!-- 模块 -->
      <div
        ref="securityModuleRef"
        class="card md:!col-start-9"
      >
        <div class="card-title">
          安全性认证
        </div>
        <div class="card-descript">
          Security certification
        </div>
        <Marquee
          ref="securityRef"
          class="card-content leading-8!"
          text="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Euro NCAP认证、NHTSA认证、IIHS认证、C-NCAP认证;为汽车保证出口于世界各地,每一款车型均满足多个认证体系,认证体系包括国内、国外;"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.quality {
  background-image: url('/quality.jpg');
}

.card {
  @apply col-span-10 col-start-2 mt-6 text-center font-500 md:(col-span-3 mt-0);

  &-title {
    @apply text-2xl md:text-4xl;
  }

  &-descript {
    @apply text-primary b-b-2 b-primary text-2xl mt-4 md:(text-4xl leading-16 mt-2);
  }

  &-content {
    @apply text-base mt-4 text-left;
  }
}
</style>
