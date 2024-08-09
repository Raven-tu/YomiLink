import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetDaisy } from 'unocss-preset-daisy'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['flex-center', 'flex justify-center items-center'],
    ['wh-full', 'w-full h-full'],
    [
      'page-base',
      'page-tab-height flex flex-col py-3 flex-1 bg-page_bg box-border',
    ],
    ['absolute-lt', 'absolute left-0 top-0'],
    ['absolute-lb', 'absolute left-0 bottom-0'],
    ['absolute-rt', 'absolute right-0 top-0'],
    ['absolute-rb', 'absolute right-0 bottom-0'],
  ],
  presets: [
    presetUno(),
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    presetDaisy(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWind({
      attributifyPseudo: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
