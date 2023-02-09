import DefaultTheme from 'vitepress/theme'
import '../style/vars.css'

import '../../../src/assets/index.css'



// Components

import { MagnifyingGlassIcon, InformationCircleIcon }  from "@devheniik/icons"

import VButton from "../../../src/components/Button/VButton.vue"
import VInput from "../../../src/components/Input/VInput.vue"
import WrapView from "../../../docs/view/WrapView.vue"


export default
{
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('MagnifyingGlassIcon', MagnifyingGlassIcon)
    ctx.app.component('InformationCircleIcon', InformationCircleIcon)

    // components
    ctx.app.component('VButton', VButton)
    ctx.app.component('VInput', VInput)
    ctx.app.component('WrapView', WrapView)
  }
}

