<script setup lang="ts">
import { ref } from 'vue'
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

const show = ref(false)
</script>

<template>
  <Menu>
    <div class="relative v-menu__container">
      <MenuButton class="v-menu__button" @click="show = true">
      <slot >
        <div class="v-menu__default-box" >
          <button class="v-menu__default-button">
            <span class="v-menu__dot"></span>
            <span class="v-menu__dot"></span>
            <span class="v-menu__dot"></span>
          </button>
        </div>
      </slot>
    </MenuButton>
    <MenuItems v-if="show" class="v-menu__items items-group" @click="show = false">
      <slot name="menuItems" />
    </MenuItems>
    </div>

  </Menu>
</template>

<style lang="scss" scoped>
@import '../../assets/themes/main/components/menu.scss';
</style>
