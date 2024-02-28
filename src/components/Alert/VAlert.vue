<script setup lang="ts">
import { CircleInfoIcon, CloseMdIcon, TriangleWarningIcon, CircleCheckIcon } from '@devheniik/icons'
import VButton from '../Button/VButton.vue'
import { computed } from 'vue'
import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'success' | 'warning' | 'danger'
    label?: string
    acceptButton?: string
    cancelButton?: string
    controls?: boolean
    width?: string
  }>(),
  {
    variant: 'primary',
    acceptButton: 'Accept',
    cancelButton: 'Cancel',
    controls: true,
    width: 'w-[500px]'
  }
)

interface Emits {
  (e: 'close'): void
  (e: 'accept'): void
  (e: 'cancel'): void
}

const emit = defineEmits<Emits>()

const close = () => {
  emit('close')
}

const accept = () => {
  emit('accept')
}

const cancel = () => {
  emit('cancel')
}

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
      icon = TriangleWarningIcon
      break
    case 'danger':
      icon = TriangleWarningIcon
      break
  }

  return icon
})
</script>

<template>
  <div :class="['v-alert', width]">
    <div class="v-alert__outer-container">
      <div :class="['v-alert__left-border', `v_bg-${variant}-medium`]"></div>
      <div class="v-alert__inner-container">
        <slot name="icon">
          <component :is="icon" :class="['v-alert__icon', `v-text_${variant}_medium`]" />
        </slot>
        <main class="v-alert__main">
          <h4 class="v-alert__label">{{ label }}</h4>
          <div class="v-alert__text">
            <slot />
          </div>
          <div v-if="controls || acceptButton || cancelButton" class="v-alert__controls">
            <v-button v-if="acceptButton" size="small" @click="accept">
              {{ acceptButton }}
            </v-button>
            <v-button v-if="cancelButton" color="light" size="small" class="v-alert__controls__cancel" @click="cancel">
              {{ cancelButton }}
            </v-button>
          </div>
        </main>
      </div>
    </div>
    <button
    :class="[{ 'v-alert__close_flat': !$slots.default && !controls },
    { 'v-alert__close_aligned': !props.label },
    'v-alert__close']" @click="close">
      <slot name="closeIcon">
        <CloseMdIcon class="v-alert__close-icon" />
      </slot>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/themes/main/components/alert.scss';
</style>
