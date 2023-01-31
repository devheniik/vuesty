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
  <div class="v_tab-group">
    <TabGroup>
      <TabList class="v_tab-list">
        <Tab v-for="{ name, badge } in tabs" :key="name">
          <button class="v_tab-list__btn">
            {{ name }}
            <span class="v_tab-list__badge">
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

</style>
