<template>
  <div class=" max-w-md px-2 py-16 sm:px-0">
    <TabGroup>
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
      </TabList>

      <TabPanels>
        <slot name="panels"></slot>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup lang="ts">
import { TabGroup, TabList, TabPanels, Tab  } from '@headlessui/vue'

export interface VTabs {
  name: string,
  badge: string,
}

defineProps<{
  tabs: VTabs[]
}>()

</script>

<style lang="scss">
[id^=headlessui-tabs-tab-] {
 @apply w-full  py-2.5 text-base  font-medium leading-5  border-b-2 border-transparent
}

[id^=headlessui-tabs-tab-][aria-selected='true'] {
 @apply border-b-primary-500 outline-none
}
</style>
