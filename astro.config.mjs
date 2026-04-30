// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

import starlightHeadingBadges from 'starlight-heading-badges'
import starlightScrollToTop from 'starlight-scroll-to-top'
import starlightImageZoom from 'starlight-image-zoom'

import react from '@astrojs/react';

import path from 'path';

// https://astro.build/config
export default defineConfig({
  site: 'https://ers.errore.ink',
  integrations: [starlight({
    title: 'ERS',
    social: [
      {
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/errore/ers-docs',
       },
       {
        icon: 'discord',
        label: 'Discord',
        href: 'https://discord.gg/yv9zzhPP88',
      },
    ],
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
    sidebar: [
      {
        label: '入门',
        link: '/getting-started/',
        translations: {
          'en': 'Getting Started',
          'zh-cn': '入门',
          'fr': 'Pour commencer',
        },
      },
      {
        label: '使用ERS材质节点',
        autogenerate: { directory: 'nodes' },
        translations: {
          'en': 'Using ERS Material Nodes',
          'zh-cn': '使用ERS材质节点',
          'fr': 'Utilisation des nœuds de matériau ERS',
        },
      },
      {
        label: '进阶指南',
        autogenerate: { directory: 'advanced' },
        translations: {
          'en': 'Advanced Guides',
          'zh-cn': '进阶指南',
          'fr': 'Guides avancés',
        },
      },
      {
        label: '更新日志',
        link: '/changelog/',
        translations: {
          'en': 'Changelog',
          'zh-cn': '更新日志',
          'fr': 'Journal des modifications',
        },
      },
      {
        label: '路线图',
        link: 'https://github.com/users/errore/projects/1',
        translations: {
          'en': 'Roadmap',
          'zh-cn': '路线图',
          'fr': 'Feuille de route',
        },
        
      }
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
    defaultLocale: 'en',
    locales: {
      'zh-cn': {
        label: '简体中文',
        lang: 'zh-CN',
      },
      'en': {
        label: 'English',
        lang: 'en',
      },
      'fr': {
        label: 'Français',
        lang: 'fr',
      },
    }
  }), react()],
  output: 'static',
  adapter: cloudflare({
    prerenderEnvironment: 'node',
  }),
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '~/': path.resolve('./src') + '/', // 使用 ~/components/...
        '@': path.resolve('./src')         // 使用 @/components/...
      }
    }
  }
});