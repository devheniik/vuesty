import CLAvatar from '../components/CLAvatar.vue'
// import { generateSource} from './helpers/showCode'

export default {
  title: 'Avatar',
  component: CLAvatar,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'danger', 'warning', 'primary-tonal', 'success-tonal', 'danger-tonal', 'warning-tonal', ],
    },
    size: {
      control: {
        type: 'select'
      },
      options: [
        'tiny', 'small', 'medium', 'big', 'large', 'huge', 'gigantic'
      ]
    },
    onClick: {},
  },
  args: {

  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args


const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CLAvatar },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
  `
  <CLAvatar v-bind="args">
    <template v-if="${'slot' in args}" v-slot:default>${args.slot}</template>
  </CLAvatar>
  `,
})



export const Avatar = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Avatar.args = {
  variant: 'primary',
  slot: `<img  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>`,
};

export const Letters = Template.bind({})
Letters.args = {
  slot: 'SD',
  color: 'success'
}

// Tags.parameters = {
//   docs: {
//   source: { code: generateSource(BtnTemplate, Tags.args) },
//   },
// };

