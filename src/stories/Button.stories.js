import VButton from '../components/Button/VButton.vue'

import { defineComponent } from 'vue'

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
      defaultValue: 'Button',
    },
  },
}

export const Template = args =>
  defineComponent({
    components: { VButton },
    setup: () => ({ args }),
    template: `<v-button v-bind="args" >Click</v-button>`,
  })
