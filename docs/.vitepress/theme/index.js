import DefaultTheme from 'vitepress/theme'
import '../style/vars.css'

import '../../../src/assets/index.css'



// Components

import { MagnifyingGlassIcon, InformationCircleIcon, UserIcon }  from "@devheniik/icons"
import { MenuItem, TabPanel } from '@headlessui/vue'

import VButton from "../../../src/components/Button/VButton.vue"
import VInput from "../../../src/components/Input/VInput.vue"
import VBadge from "../../../src/components/Badge/VBadge.vue"
import VAccordion from "../../../src/components/Accordion/VAccordion.vue"
import VAlert from "../../../src/components/Alert/VAlert.vue"
import VMenu from "../../../src/components/Menu/VMenu.vue"
import VPagination from "../../../src/components/Pagination/VPagination.vue"
import VSwitch  from "../../../src/components/Switch/VSwitch.vue"
import VProgress from "../../../src/components/Progress/VProgress.vue"
import VTabs  from "../../../src/components/Tabs/VTabs.vue"
import VAvatar  from "../../../src/components/Avatar/VAvatar.vue"
import VAvatarGroup  from "../../../src/components/AvatarGroup/VAvatarGroup.vue"
import VNotification from "../../../src/components/Notification/VNotification.vue"
import WrapView from "../../../docs/view/WrapView.vue"

export default
{
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('MagnifyingGlassIcon', MagnifyingGlassIcon)
    ctx.app.component('InformationCircleIcon', InformationCircleIcon)
    ctx.app.component('UserIcon', UserIcon)
    ctx.app.component('MenuItem', MenuItem)
    ctx.app.component('TabPanel', TabPanel)

    // components
    ctx.app.component('VButton', VButton)
    ctx.app.component('VInput', VInput)
    ctx.app.component('VBadge', VBadge)
    ctx.app.component('VAccordion', VAccordion)
    ctx.app.component('VMenu', VMenu)
    ctx.app.component('VAlert', VAlert)
    ctx.app.component('VPagination', VPagination)
    ctx.app.component('VNotification', VNotification)
    ctx.app.component('VSwitch', VSwitch)
    ctx.app.component('VProgress', VProgress)
    ctx.app.component('VTabs', VTabs)
    ctx.app.component('VAvatar', VAvatar)
    ctx.app.component('VAvatarGroup', VAvatarGroup)
    ctx.app.component('WrapView', WrapView)
  }
}
