// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

import starlightHeadingBadges from 'starlight-heading-badges'
import starlightCoolerCredit from 'starlight-cooler-credit'
import starlightScrollToTop from 'starlight-scroll-to-top'
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
  site: 'https://ers.errore.ink',
  integrations: [starlight({
    title: 'ERS',
    logo: {
      dark: './src/assets/ERS.svg',
      light: './src/assets/ERS-dark.svg',
      replacesTitle: true,
    },
    customCss: [
      './src/styles/global.css',
      '@fontsource-variable/jetbrains-mono'
    ],
    plugins: [
      starlightHeadingBadges(),
      starlightCoolerCredit(),
      starlightImageZoom(),
      starlightScrollToTop({
        tooltipText: {
          'en': 'Scroll to top',
          'es': 'Ir arriba',
          'fr': 'Retour en haut',
          'de': 'Nach oben scrollen',
          'pt': 'Voltar ao topo',
          'ja': 'トップへ戻る',
          'zh': '回到顶部'
        },
        svgPath: 'M5 15L12 8L19 15',
      })
    ],
    locales: {
      root: {
        label: '简体中文',
        lang: 'zh-CN', // lang 是 root 语言必须的
      },
      'zh-cn': {
        label: 'English',
        lang: 'en',
      },
    }
  })],

  adapter: cloudflare(),

  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
});