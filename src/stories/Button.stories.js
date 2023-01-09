import VButton from '../components/Button/VButton.vue'
// import generateSource from './helpers/showCode'

export default {
  title: 'Button',
  component: VButton,
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      options: ['success', 'danger', 'warning', 'gray', 'indigo'],
    },
    size: {
      control: { type: 'select' },
      options: ['big', 'small', 'tiny'],
    },
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Button'
    }
  }
}

const template = `<v-button>{{ args.default }}</v-button>`

const Template = (args) => ({
  components: { VButton },
  setup() {
    return {args}
  },
  template: `<v-button>{{ args.default }}</v-button>`
})


export const Primary = Template.bind({})

Primary.args = {
  variant: 'primary'
}

// Primary.parameters = {
//   docs: {
//     source: { code: generateSource(template, Primary.args) },
//   },
// }
