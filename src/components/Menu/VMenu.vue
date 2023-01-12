<template>
    <Menu>
      <MenuButton class="mb-1">
        <slot>
          <div
          class="flex items-center justify-center rounded-md border-2 border-primary-500 text-primary-500"
          @click="show = !show">
            <button class="leading-[0px] pb-[15px] pt-1 px-1">...</button>
          </div>
        </slot>

      </MenuButton>
      <MenuItems class="flex flex-col w-fit py-2 px-4 bg-white border border-primary-500 rounded-md shadow-md space-y-2 items-group">
        <slot name="menuItems" />
      </MenuItems>
  </Menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

const show = ref(false)

</script>

<style>
[id^='headlessui-menu-item']{
@apply border-b hover:border-primary-500 text-sm font-semibold text-primary-500
}
</style>
