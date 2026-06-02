import anime from 'animejs/lib/anime.es.js'

const EASING = 'easeInOutQuad'

/**
 * @param {Object} options - 配置选项
 * @param {Object} options.el - 目标元素 ref
 * @param {number} [options.from=0] - 起始值
 * @param {number} [options.to=0] - 结束值
 * @param {number} [options.delay=0] - 延迟时间
 * @param {number} [options.duration=200] - 持续时间
 * @param {Object} [options.option] - 其他 anime.js 选项
 */
export function useTranslateX({ el, from = 0, to = 0, delay = 0, duration = 200, option = {} }) {
  const instance = ref()
  onMounted(() => {
    instance.value = anime({
      targets: el.value,
      translateX: [from, to],
      scale: [1.2, 1],
      opacity: [0, 1],
      duration,
      delay,
      easing: EASING,
      ...option
    })
  })
  return { instance }
}

/**
 * @param {Object} options - 配置选项
 * @param {Object} options.el - 目标元素 ref
 * @param {number} [options.from=0] - 起始值
 * @param {number} [options.to=0] - 结束值
 * @param {number} [options.delay=0] - 延迟时间
 * @param {number} [options.duration=200] - 持续时间
 * @param {Object} [options.option] - 其他 anime.js 选项
 */
export function useTranslateY({ el, from = 0, to = 0, delay = 0, duration = 200, option = {} }) {
  const instance = ref()
  onMounted(() => {
    instance.value = anime({
      targets: el.value,
      translateY: [from, to],
      scale: [1.2, 1],
      opacity: [0, 1],
      duration,
      delay,
      easing: EASING,
      ...option
    })
  })
  return { instance }
}

export function useAnime(opotion) {
  const instance = ref()
  onMounted(() => {
    instance.value = anime({
      ...opotion,
      targets: opotion.targets.value
    })
  })
  return { instance }
}
