<script setup lang="ts">
import { InformationCircleIcon, XMarkIcon, ExclamationTriangleIcon, CheckCircleIcon  } from '@devheniik/icons'
import VButton from '../Button/VButton.vue'
import {computed} from "vue"
import type {FunctionalComponent, HTMLAttributes, VNodeProps} from "vue"

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'success' | 'warning' | 'danger'
    label: string
    acceptButton?: string
    cancelButton?: string
    controls?: boolean
  }>(),
  {
    variant: 'primary',
    label: 'Label',
    acceptButton: 'Accept',
    cancelButton: 'Cancel',
    controls: true,
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
  let icon = InformationCircleIcon

  switch (props.variant) {
    case 'primary':
      icon = InformationCircleIcon
      break
    case 'success':
      icon = CheckCircleIcon
      break
    case 'warning':
      icon = ExclamationTriangleIcon
      break
    case 'danger':
      icon = ExclamationTriangleIcon
      break
  }

  return icon
})
</script>

<template>
  <div class="v-alert">
    <div :class="['v-alert__left-border', `bg-${variant}-medium`]"></div>
    <slot name="icon">
      <component :is="icon" :class="['v-alert__icon', `text-${variant}-medium`]" />
    </slot>
    <main class="v-alert__main">
      <h4 class="v-alert__label">{{ label }}</h4>
      <p class="v-alert__text">
        <slot />
      </p>
      <div v-if="controls" class="v-alert__controls">
        <v-button size="small" @click="accept">
          {{ acceptButton }}
        </v-button>

        <v-button color="light" size="small" class="v-alert__controls__cancel" @click="cancel">
          {{ cancelButton }}
        </v-button>
      </div>
    </main>
    <button :class="[{ 'v-alert__close_flat': !$slots.default && !controls }, 'v-alert__close']" @click="close">
      <XMarkIcon class="v-alert__close-icon" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/themes/main/components/alert.scss';
</style>
