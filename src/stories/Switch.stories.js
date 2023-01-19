import VSwitch from '../components/Switch/VSwitch.vue'
import { UserIcon } from '@devheniik/icons'

export default {
  title: 'Switch',
  component: VSwitch,
}

const Template = args => ({
  components: { VSwitch, UserIcon },

  setup() {
    return { args }
  },

  template: `
    <v-switch v-bind='args'/>
  `,
})

export const Switch = Template.bind({})

const TemplateCustomSlot = args => ({
  components: { VSwitch, UserIcon },

  setup() {
    return { args }
  },

  template: `
    <v-switch><UserIcon class="text-white"></UserIcon></v-switch>
  `,
})

export const SwtichCustom = TemplateCustomSlot.bind({})
