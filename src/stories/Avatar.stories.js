import VAvatar from '../components/Avatar/VAvatar.vue'
import VAvatarGroup from '../components/AvatarGroup/VAvatarGroup.vue'

export default {
  title: 'Avatar',
  component: VAvatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['tiny', 'small', 'medium', 'big', 'large', 'huge', 'gigantic'],
    },
    onClick: {},
  },
}

const Template = args => ({
  components: { VAvatar },

  setup() {
    return { args }
  },

  template: `
  <v-avatar v-bind="args">

  </v-avatar>
  `,
})

export const Avatar = Template.bind({})
Avatar.args = {
  src: "src/assets/components/avatar.svg",
}

export const withWords = Template.bind({})

withWords.argTypes = {
  color: {
    control: { type: 'select' },
    options: [
      'primary',
      'success',
      'danger',
      'warning',
      'primary-tonal',
      'success-tonal',
      'danger-tonal',
      'warning-tonal',
    ],
  },
}

withWords.args=  {
  text: "George Martin",
}



const TemplateAvatarGroup = args => ({
  components: { VAvatarGroup, VAvatar },

  setup() {
    return { args }
  },

  template: `
  <v-avatar-group v-bind="args">
    <v-avatar src="src/assets/components/avatar.svg" />
    <v-avatar src="src/assets/components/avatar.svg" />
    <v-avatar src="src/assets/components/avatar.svg" />
    <v-avatar src="src/assets/components/avatar.svg" />
    <v-avatar src="src/assets/components/avatar.svg" />
    <v-avatar src="src/assets/components/avatar.svg" />
  </v-avatar-group>
  `,
})

export const AvatarGroup = TemplateAvatarGroup.bind({})

AvatarGroup.argTypes = {
  size: {
    control: {
      type: 'select',
    },
    options: ['tiny', 'small', 'medium', 'big', 'large', 'huge', 'gigantic'],
  }
}
