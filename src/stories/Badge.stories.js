import VBadge from '../components/Badge/VBadge.vue'

export default {
  title: 'Badge',
  component: VBadge,
  argTypes: {
    variantColor: {
      control: { type: 'select' },
      options: ['primary', 'success', 'danger', 'warning', 'indigo', 'secondary', 'light', 'upgrade', 'tertiary', 'info', 'neutral']
    },
  },
  args: {
    status: false,
    label: 'Label',
    icon: false,
    chip: false,
  },
}

const Template = args => ({

  components: { VBadge },

  setup() {
    return { args }
  },
  template: `
  <VBadge v-bind="args">
    <template v-if="${'text' in args}" v-slot:default>${args.text}</template>
  </VBadge>
  `,
})

export const Badge = Template.bind({})
