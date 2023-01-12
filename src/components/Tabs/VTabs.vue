<template>
  <div class="w-full max-w-md px-2 py-16 sm:px-0">
    <TabGroup>
      <TabList class="flex space-x-1  p-1">
        <slot />
      </TabList>
      <TabPanels>
        <slot name="panels"></slot>
      </TabPanels>


    </TabGroup>
  </div>
</template>

<script setup lang="ts">
import { TabGroup, TabList, TabPanels  } from '@headlessui/vue'



</script>
