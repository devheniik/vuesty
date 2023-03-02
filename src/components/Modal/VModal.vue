<template>
  <teleport to="#modals">
    <transition
      enter-active-class="v-modal__enter-active"
      enter-from-class="v-modal__enter-from"
      enter-to-class="v-modal__enter-to"
      leave-active-class="v-modal__leave-active">
      <div v-if="modelValue" :class="['v-modal']">
        <div :class="['v-modal__inner', `${width}`]">
          <header class="v-modal__inner__header">
            <h3 class="v-modal__inner__header__heading">
              {{ heading }}
            </h3>
            <XMarkIcon
            class="v-modal__inner__header__xmark"
            @click="$emit('update:modelValue', false)"  />
          </header>
          <main class="v-modal__inner__main">
            <slot></slot>
          </main>
        </div>
        <div class="v-modal__outside" @click="$emit('update:modelValue', false)"></div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@devheniik/icons';
withDefaults(defineProps<{
  modelValue: boolean,
  heading?: string ,
  width: string,
}>(), {
  width: 'w-auto'
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
@import '../../assets/themes/main/components/modal.scss';
</style>
