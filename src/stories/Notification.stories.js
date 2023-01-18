import VNotification from '../components/Notification/VNotification.vue'
import { UserIcon } from '@devheniik/icons'

export default {
  title: 'Notification',
  component: VNotification,
}

const Template = args => ({
  components: { VNotification, UserIcon },

  setup() {
    return { args }
  },

  template: `
  <div class="space-x-5">
    <v-notification :count="2" />
    <v-notification :count="20" />
    <v-notification :count="137" />
    <v-notification :count="4981" />
    <v-notification/>
    <v-notification><UserIcon /></v-notification>
  </div>
  `,
})

export const Notification = Template.bind({})
