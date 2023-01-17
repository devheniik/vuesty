<template>
  <div class=" max-w-md px-2 py-16 sm:px-0">
    <TabGroup>
<<<<<<< HEAD
      <TabList class="flex space-x-1 p-1">
        <slot />
=======
      <TabList class="flex space-x-1  p-1">
        <Tab v-for="{name, badge} in tabs" :key="name">
        <button class="flex ml-2">
          {{ name }}
          <span
          class="tag tag-primary ml-2"
          :class="{'text-white bg-primary-500' : true}"
          >
          {{ badge }}
          </span>
        </button>
        </Tab>
>>>>>>> 4ca898895455f5bf8d24b13d301d67683ddb61c1
      </TabList>

      <TabPanels>
        <slot name="panels"></slot>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup lang="ts">
<<<<<<< HEAD
import { TabGroup, TabList, TabPanels } from '@headlessui/vue'
=======
import { TabGroup, TabList, TabPanels, Tab  } from '@headlessui/vue'

export interface VTabs {
  name: string,
  badge: string,
}

defineProps<{
  tabs: VTabs[]
}>()

>>>>>>> 4ca898895455f5bf8d24b13d301d67683ddb61c1
</script>

<style lang="scss">
[id^=headlessui-tabs-tab-] {
 @apply w-full  py-2.5 text-base  font-medium leading-5  border-b-2 border-transparent
}

[id^=headlessui-tabs-tab-][aria-selected='true'] {
 @apply border-b-primary-500 outline-none
}
</style>
