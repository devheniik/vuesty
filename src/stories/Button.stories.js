import VButton from '../components/Button/VButton.vue'
// import generateSource from './helpers/showCode'

export default {
  title: 'Button',
  component: VButton,
  argTypes: {
    variantColor: {
      control: { type: 'select' },
      options: ['primary', 'success', 'danger', 'warning', 'indigo', 'upgrade', 'tertiary', 'info', 'neutral']
    },
    size: {
      control: { type: 'select' },
      options: ['big', 'small'],
    },
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Button',
    },
  },
}

// const template = `<v-button>{{ args.default }}</v-button>`

const Template = (args) => ({
  components: { VButton },
  setup() {
    return { args }
  },
  template: `<v-button v-bind="args">{{args.default}}</v-button>`,
})

export const Primary = Template.bind({})

Primary.args = {
  size: 'small'
}

// Primary.parameters = {
//   docs: {
//     source: { code: generateSource(template, Primary.args) },
//   },
// }
