<template>

  <teleport to="#modals">
    <transition
      enter-active-class="v-modal__enter-active"
      enter-from-class="v-modal__enter-from"
      enter-to-class="v-modal__enter-to"
      leave-active-class="v-modal__leave-active">
      <div v-if="modelValue" :class="isSlide ? 'v-modal_slide' : 'v-modal'">
        <div :class="[isSlide ? 'v-modal__inner_slide' : 'v-modal__inner',{'v-modal__inner_bg-white': bgWhite}, `${width ? width : 'w-1/2'} ${height}`, {'h-[90%]' : fullHeight}]">
          <header :class="isSlide ? 'v-modal__inner__header_slide' : 'v-modal__inner__header'">
            <h3 class="v-modal__inner__header__heading">
              {{ heading }}
            </h3>
            <CloseMdIcon
            class="v-modal__inner__header__xmark stroke-2"
            @click="$emit('update:modelValue', false)"  />
          </header>
          <main class="v-modal__inner__main">
            <slot ></slot>
          </main>
        </div>
        <div class="v-modal__outside" @click="$emit('update:modelValue', false)"></div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { CloseMdIcon } from '@devheniik/icons'

withDefaults(defineProps<{
  modelValue: boolean,
  heading?: string ,
  width: string,
  height: string,
  fullHeight?: boolean,
  bgWhite?: boolean,
  isSlide: boolean,
}>(), {
  width: 'w-auto',
  height: 'h-auto',
  fullHeight: false,
  bgWhite: false,
  isSlide: false,
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
@import '../../assets/themes/main/components/modal.scss';
</style>
