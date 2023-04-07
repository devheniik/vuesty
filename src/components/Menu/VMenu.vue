<script setup lang="ts">
import { ref } from 'vue'
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import { MoreHorizontalIcon } from '@devheniik/icons';

defineProps<{
  icons?: boolean
}>()

const show = ref(false)
</script>

<template>
  <Menu>
    <div class="relative v-menu__container">
      <MenuButton class="v-menu__button" @click="show = true">
      <slot >
        <div class="v-menu__default-box" >
          <button class="v-menu__default-button">
            <MoreHorizontalIcon class="w-5 h-5 text-primary-500" />
          </button>
        </div>
      </slot>
    </MenuButton>
    <MenuItems v-if="show" :class="[{'items-end' : icons},'v-menu__items items-group']" @click="show = false">
      <slot name="menuItems" />
    </MenuItems>
    </div>

  </Menu>
</template>

<style lang="scss">
@import '../../assets/themes/main/components/menu.scss';
</style>
