import VMenu from '../src/components/Menu/VMenu.vue'

export default {
  title: 'Menu',
  component: VMenu,
}

const Template = args => ({
  components: { VMenu },

  setup() {
    return { args }
  },

  template: `
  <v-menu v-bind="args">
    <template #menuItems>
      <MenuItem>
        <a  href="#">
          Documentation
        </a>
      </MenuItem>
      <MenuItem disabled>
        <span class="opacity-75">Invite a friend (coming soon!)</span>
      </MenuItem>
    </template>
  </v-menu>
  `,
})

export const Menu = Template.bind({})
