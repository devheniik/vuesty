import CLButton from '../components/CLButton.vue'
import {generateSource} from './helpers/showCode'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: CLButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      options: ['success', 'danger', 'warning', 'gray', 'indigo'],
    },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['big', 'small', 'tiny'],
    },
    leftIcon: {
      control: { type: 'select' },
      options: [''],
    },
    rightIcon: {
      control: { type: 'select' },
      options: [''],
    },
  },
  args: {
    disabled: false,
    text: 'Button',
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CLButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<CLButton v-bind="args">
    <template v-if="${'text' in args}" v-slot:default>${args.text}</template>
  </CLButton>`,
})

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  variant: 'primary',
}


Primary.parameters = {
  docs: {
    source: { code: generateSource('<CLButton v-bind="args"></CLButton>', Primary.args)
    },
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}

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
