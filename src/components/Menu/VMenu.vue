<template>
  <Menu>
    <MenuButton class="mb-1">
      <slot>
        <div
          class="flex items-center justify-center rounded-md border-2 border-primary-500 text-primary-500"
          @click="show = !show">
          <button class="px-1 pb-[15px] pt-1 leading-[0px]">...</button>
        </div>
      </slot>
    </MenuButton>
    <MenuItems
      class="items-group flex w-fit flex-col space-y-2 rounded-md border border-primary-500 bg-white py-2 px-4 shadow-md">
      <slot name="menuItems" />
    </MenuItems>
  </Menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

const show = ref(false)
</script>

<style>
[id^='headlessui-menu-item'] {
  @apply border-b text-sm font-semibold text-primary-500 hover:border-primary-500;
}
</style>
