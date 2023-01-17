
import '../src/assets/themes/main/components/badge.scss'
import '../src/assets/themes/main/components/avatar.scss'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
