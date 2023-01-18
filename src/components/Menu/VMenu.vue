<script setup lang="ts">
import { ref } from 'vue'
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

const show = ref(false)
</script>

<template>
  <Menu>
    <MenuButton class="v_menu-button">
      <slot>
        <div
          class="v_menu-button__slot"
          @click="show = !show">
          <button class="v_menu-button__slot__inner">...</button>
        </div>
      </slot>
    </MenuButton>
    <MenuItems
      class="v_menu-items">
      <slot name="menuItems" />
    </MenuItems>
  </Menu>
</template>

<style>

</style>
