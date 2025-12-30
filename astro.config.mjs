// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

import starlightHeadingBadges from 'starlight-heading-badges'
import starlightScrollToTop from 'starlight-scroll-to-top'
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
  site: 'https://ers.errore.ink',
  integrations: [starlight({
    title: 'ERS',
    editLink: {
      baseUrl: 'https://github.com/errore/ers-docs/edit/master/',
    },
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
    defaultLocale: 'zh-cn',
    locales: {
      'zh-cn': {
        label: '简体中文',
        lang: 'zh-CN',
      },
      'en': {
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