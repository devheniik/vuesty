import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vuesty',
  description: 'Vue 3 component library',
  head: [
    ['link', { rel: 'icon', href: '/VuestyIcon.svg', type: 'image/svg+xml' }],
  ],
  themeConfig: {
    logo: '/VuestyLogo.svg',
    siteTitle: '',
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/start/getting-started' },
          { text: 'Installation', link: '/start/installation' },
          { text: 'Icons', link: '/start/icons' },
          { text: 'Configuration', link: '/start/configuration' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' }
        ]
      }
    ],
  },

  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2023',
  },
})
