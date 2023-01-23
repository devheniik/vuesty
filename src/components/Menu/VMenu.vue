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
          class="v-menu-button__slot"
          @click="show = !show">
          <button class="v-menu-button__slot__inner">...</button>
        </div>
      </slot>
    </MenuButton>
    <MenuItems
      class="v-menu-items">
      <slot name="menuItems" />
    </MenuItems>
  </Menu>
</template>

<style>
@import "src/assets/themes/main/components/menu.scss";
</style>
