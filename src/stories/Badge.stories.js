import CLTag from '../components/CLTag.vue'
// import { generateSource} from './helpers/showCode'


// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Badge',
  component: CLTag,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      options: ['success', 'danger', 'warning', 'gray', 'indigo', 'blue'],
    },
    onClick: {},
    // size: {
    //   control: { type: 'select' },
    //   options: ['big', 'small', 'tiny'],
    // },
    // leftIcon: {
    //   control: { type: 'select' },
    //   options: [''],
    // },
    // rightIcon: {
    //   control: { type: 'select' },
    //   options: [''],
    // },
  },
  args: {
    text: 'Button',
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
`<CLTag v-bind="args">
<template v-if="'text' in args" v-slot:default>{{args.text}}</template>
</CLTag>`

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CLTag },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<CLTag v-bind="args">
  <template v-if="'text' in args" v-slot:default>{{args.text}}</template>
  </CLTag>`,
})


export const Avatar = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
// Avatar.args = {
//   variant: 'primary',
// };

export const Tags = Template.bind({})
Tags.args = {
  // variant: 'secondary',
  text: 'Label',
}

// Tags.parameters = {
//   docs: {
//   source: { code: generateSource(BtnTemplate, Tags.args) },
//   },
// };

export const TagsWithIcons = Template.bind({})
TagsWithIcons.args = {
  text: 'Label',
  // variant: 'light'
}

export const Status = Template.bind({})
Status.args = {
  // size: 'large',
  text: 'Label',
}

export const Chips = Template.bind({})
Chips.args = {
  // size: 'small',
  text: 'Label',
}

export const Notifications = Template.bind({})
Notifications.args = {
  // size: 'small',
}
