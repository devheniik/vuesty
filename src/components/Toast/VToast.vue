<script setup lang="ts">
import { InformationCircleIcon, XMarkIcon, CheckCircleIcon, ExclamationCircleIcon } from '@devheniik/icons'
import {computed} from "vue"
import type {FunctionalComponent, HTMLAttributes, VNodeProps} from "vue"

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'success' | 'warning' | 'danger'
    text: string
  }>(),
  {
    variant: 'primary',
    text: '',
  }
)

interface Emits {
  (e: 'close'): void
}

const emit = defineEmits<Emits>()

const close = () => {
  emit('close')
}


const icon = computed<FunctionalComponent<HTMLAttributes & VNodeProps> | string>(() => {
  let icon = InformationCircleIcon

  switch (props.variant) {
    case 'primary':
      icon = InformationCircleIcon
      break
    case 'success':
      icon = CheckCircleIcon
      break
    case 'warning':
      icon = ExclamationCircleIcon
      break
    case 'danger':
      icon = ExclamationCircleIcon
      break
  }

  return icon
})
</script>

<template>
  <div class="v-alert v-toast">
    <div :class="['v-alert__left-border', `bg-${variant}-medium`]"></div>
    <slot name="icon">
      <component :is="icon" :class="['v-alert__icon', `v-text_${variant}_medium`]" />
    </slot>
    <main class="v-alert__main">
      <p class="v-alert__text">{{ text }}</p>
    </main>
    <button :class="['v-alert__close_flat', 'v-alert__close']" @click="close">
      <XMarkIcon class="v-alert__close-icon" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/themes/main/components/alert.scss';
</style>
