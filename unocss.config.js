import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import { SHORTCUTS, THEME } from './app/constants/unocss'

export default defineConfig({
  shortcuts: SHORTCUTS,
  presets: [
    presetUno(),
    // 模板使用 viewport 作为移动端适配方案，unocss 默认单位为 rem
    // 所以需要转成 px，然后由 postcss 把 px 转成 vw/vh，完成适配
    // https://unocss.dev/presets/rem-to-px
    presetRemToPx({
      baseFontSize: 16
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2
    }),
    presetTypography()
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      primary: THEME.PRIMARY
    }
  }
})
