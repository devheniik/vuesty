<script setup lang="ts">
import { TabGroup, TabList, TabPanels, Tab } from '@headlessui/vue'

export interface VTabs {
  name: string
  badge: string
}

defineProps<{
  tabs: VTabs[]
}>()
</script>

<template>
  <div class="max-w-md px-2 py-16 sm:px-0">
    <TabGroup>
      <TabList class="flex space-x-1 p-1">
        <Tab v-for="{ name, badge } in tabs" :key="name">
          <button class="ml-2 flex">
            {{ name }}
            <span class="tag tag-primary ml-2" :class="{ 'bg-primary-500 text-white': true }">
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

<style lang="scss">
[id^='headlessui-tabs-tab-'] {
  @apply w-full  border-b-2 border-transparent  py-2.5 text-base  font-medium leading-5;
}

[id^='headlessui-tabs-tab-'][aria-selected='true'] {
  @apply border-b-primary-500 outline-none;
}
</style>
