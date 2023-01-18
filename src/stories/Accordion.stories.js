import VAccordion from '../components/Accordion/VAccordion.vue'

export default {
  title: 'Accordion',
  component: VAccordion,
}

const Template = args => ({
  components: { VAccordion },

  setup() {
    return { args }
  },

  template: `
  <v-accordion v-bind="args">

  </v-accordion>
  `,
})

export const Accordion = Template.bind({})
