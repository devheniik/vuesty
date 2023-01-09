import VButton from '../components/Button/VButton.vue'
import generateSource from './helpers/showCode'

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
      defaultValue: 'Button'
    }
  }
}

const template = `<v-button>{{ args.default }}</v-button>`

export const Template = args => defineComponent({
  components: { VButton },
  setup: () => ({ args }),
  template: template
})


export const Primary = Template.bind({

})

Primary.args = {
  variant: 'primary'
}

Primary.parameters = {
  docs: {
    source: { code: generateSource(template, Primary.args) },
  },
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//   variant: 'secondary',
//   docs: {
//     source: { code: generateSource(template, Primary.args) },
//   },
// }

export const Light = Template.bind({})
Light.args = {
  variant: 'light',

}

export const RightIcon = Template.bind({})
RightIcon.args = {
  size: 'large',
}

export const LeftIcon = Template.bind({})
LeftIcon.args = {
  size: 'small',
}
