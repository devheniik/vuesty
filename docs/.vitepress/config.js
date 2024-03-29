import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vuesty',
  description: 'Vue 3 component library',
  head: [
    ['link', { rel: 'icon', href: '/VuestyIcon.svg', type: 'image/svg+xml' }],
  ],
  themeConfig: {
    appearance: false,
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
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Menu', link: '/components/menu' },
          { text: 'Alert', link: '/components/alert' },
          { text: 'Pagination', link: '/components/pagination' },
          { text: 'Notification', link: '/components/notification' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Progress', link: '/components/progress' },
          // { text: 'Tabs', link: '/components/tabs' },
          { text: 'Avatar', link: '/components/avatar' },
          { text: 'AvatarGroup', link: '/components/avatarGroup' },
        ]
      }
    ],
  },

  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2023',
  },
})
