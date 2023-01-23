import DefaultTheme from 'vitepress/theme'
import '../style/vars.css'

import '../../../src/assets/index.css'

// Components

import VButton from "../../../src/components/Button/VButton.vue";
import WrapView from "../../../docs/view/WrapView.vue";


export default
{
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('VButton', VButton)
    ctx.app.component('WrapView', WrapView)
  }
}

