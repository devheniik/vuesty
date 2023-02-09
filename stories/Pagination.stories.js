import VPagination from '../src/components/Pagination/VPagination.vue'

export default {
  title: 'Pagination',
  component: VPagination,
  argTypes: {
    totalPages: {
      defaultValue: 32,
    },
  },
}

const Template = args => ({
  components: { VPagination },

  setup() {
    return { args }
  },

  template: `
  <div class="flex flex-col items-center space-y-5">
    <v-pagination v-bind='args'/>
  </div>
  `,
})

export const Pagination = Template.bind({})
