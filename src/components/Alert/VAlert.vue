<script setup lang="ts">
import type { Colors } from './types'
import { InformationCircleIcon } from '@devheniik/icons'
import { XMarkIcon } from '@devheniik/icons'
import VButton from '../Button/VButton.vue'

withDefaults(
  defineProps<{
    variantColor?: Colors
    label: string
    okButton?: string
    cancelButton?: string
    controls?: boolean
  }>(),
  {
    variantColor: 'primary',
    label: 'Label',
    okButton: 'Ok',
    cancelButton: 'Cancel',
    controls: true,
  }
)

interface Emits {
  (e: 'closeClicked'): void
  (e: 'okClicked'): void
  (e: 'cancelClicked'): void
}

const emit = defineEmits<Emits>()

const closeClicked = () => {
  emit('closeClicked')
}

const okClicked = () => {
  emit('okClicked')
}

const cancelClicked = () => {
  emit('cancelClicked')
}

</script>

<template>
  <div class="v-alert">
    <div
    :class="`v-alert__left-border bg-${variantColor}-medium`"></div>
    <InformationCircleIcon
    :class="`v-alert__info-icon text-${variantColor}-medium`" />
    <main class="v-alert__main">
      <h4 class="v-alert__label">{{ label }}</h4>
      <p class="v-alert__text">
        <slot />
      </p>
      <div v-if="controls" class="v-alert__controls">
        <v-button size="small"  @click="okClicked">
          {{ okButton }}
        </v-button>

        <v-button variant-color="light" size="small" class="v-alert__controls__cancel" @click="cancelClicked">
          {{ cancelButton }}
        </v-button>
      </div>
    </main>
    <button
    :class="[{'v-alert__close_flat' : !$slots.default && !controls}, 'v-alert__close']"
    @click="closeClicked">
      <XMarkIcon class="v-alert__close-icon" />

    </button>
  </div>
</template>

<style scoped></style>
