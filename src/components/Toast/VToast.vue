<script setup lang="ts">
import { CircleInfoIcon, CloseCircleIcon, CircleCheckIcon, CircleWarningIcon } from '@devheniik/icons'
import { computed } from 'vue'
import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'

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
  (e: 'shown'): void
}

const emit = defineEmits<Emits>()

const close = () => {
  emit('close')
}

emit('shown')

const icon = computed<FunctionalComponent<HTMLAttributes & VNodeProps> | string>(() => {
  let icon = CircleInfoIcon

  switch (props.variant) {
    case 'primary':
      icon = CircleInfoIcon
      break
    case 'success':
      icon = CircleCheckIcon
      break
    case 'warning':
      icon = CircleWarningIcon
      break
    case 'danger':
      icon = CircleWarningIcon
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
      <CloseCircleIcon class="v-alert__close-icon" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/themes/main/components/alert.scss';
</style>
