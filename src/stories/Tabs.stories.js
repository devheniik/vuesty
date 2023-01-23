import VTabs from '../components/Tabs/VTabs.vue'
const tabs = [
  { name: 'one', badge: 'label1' },
  { name: 'two', badge: 'label1' },
  { name: 'three', badge: 'label1' },
  { name: 'four', badge: 'label1' },
]

export default {
  title: 'Tabs',
  component: VTabs,
  args: {
    tabs,
  },
}

const Template = args => ({
  components: { VTabs },

  setup() {
    return { args }
  },

  template: `
  <v-tabs v-bind="args">
  <template #panels>
    <TabPanel
    >
      <ul>
        <li
          class="relative rounded-md p-3 hover:bg-gray-100"
        >
          <h3 class="text-sm font-medium leading-5">
             Some Awesome Title
          </h3>

          <ul
            class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
          >
            <li>01.02.2003</li>
            <li>&middot;</li>
            <li>5 comments</li>
            <li>&middot;</li>
            <li>2 shares</li>
          </ul>

          <a
            href="#"
            :class="[
              'absolute inset-0 rounded-md',
              'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
            ]"
          />
        </li>
      </ul>
    </TabPanel>
  </template>
</v-tabs>
  `,
})

export const Tabs = Template.bind({})
