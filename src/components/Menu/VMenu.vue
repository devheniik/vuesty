<script setup lang="ts">
import { ref, useSlots, computed } from 'vue'
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import { MoreHorizontalIcon } from '@devheniik/icons';

const slots = useSlots()

const slotsLength = computed(() => {
  if(!slots?.menuItems()) return false
  return slots?.menuItems()?.some((item) => item.children !== undefined && item.children !== 'v-if')
})
// .find((item) => item.children !== undefined && item.children.length !== 'v-if')

defineProps<{
  icons?: boolean
  notRelative?: boolean
  vertical?: boolean
}>()

const show = ref(false)
</script>

<template>
  <Menu v-if="slotsLength">
    <div :class="[{'relative' : !notRelative}, 'v-menu__container']">
      <MenuButton class="v-menu__button" @click="show = true">
      <slot >
        <div  class="v-menu__default-box" >

          <button :class="[{'vertical' : vertical}, 'v-menu__default-button']">
            <MoreHorizontalIcon class="w-5 h-5 text-primary-500" />
          </button>
        </div>
      </slot>
    </MenuButton>
    <!-- add to show check whether there are any children in slots -->
    <MenuItems v-if="show" :class="[{'items-end' : icons},'v-menu__items items-group']" @click="show = false">
      <slot name="menuItems" />
    </MenuItems>
    </div>

  </Menu>
</template>

<style lang="scss">
@import '../../assets/themes/main/components/menu.scss';
</style>
