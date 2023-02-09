import VAlert from '../src/components/Alert/VAlert.vue'

export default {
  title: '',
  component: VAlert,
  argTypes: {
    variantColor: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger'],
    },
    label: '',
    okButton: '',
    cancelButton: '',
    controls: true,
  },
}

const Template = args => ({
  components: { VAlert },

  setup() {
    return { args }
  },

  template: `
  <v-alert v-bind="args">

  </v-alert>
  `,
})

export const Alert = Template.bind({})
