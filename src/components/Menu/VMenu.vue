<script setup lang="ts">
import { ref } from 'vue'
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

const show = ref(false)
</script>

<template>
  <Menu>
    <MenuButton class="v-menu-button">
      <slot>
        <div
          class="v-menu__default-box"
          @click="show = !show">
          <button class="v-menu__default-button">...</button>
        </div>
      </slot>
    </MenuButton>
    <MenuItems
      class="v-menu-items items-group">
      <slot name="menuItems" />
    </MenuItems>
  </Menu>
</template>

<style>
[id^='headlessui-menu-item'] {
  @apply border-b text-sm font-semibold text-primary-500 hover:border-primary-500;
}
</style>
