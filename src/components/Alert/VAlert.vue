<script setup lang="ts">
import type { Colors } from './types'
import { InformationCircleIcon } from '@devheniik/icons'
import { XMarkIcon } from '@devheniik/icons'
import VButton from '../Button/VButton.vue'
import {computed} from 'vue'

const props = withDefaults(
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

const bgColor = computed(() => {
  return `bg-${props.variantColor}-medium`
})

const textColor = computed(() => {
  return `text-${props.variantColor}-medium`
})

</script>

<template>
  <div class="alertWrapper">
    <div
    class="leftColorBorder"
    :class="bgColor"></div>
    <InformationCircleIcon
    class="infoIcon"
    :class="textColor" />
    <main class="alertMain">
      <h4 class="alertLabel">{{ label }}</h4>
      <p class="alertText">
        <slot />
      </p>
      <div v-if="controls" class="alertControls">
        <v-button size="small"  @click="okClicked">
          {{ okButton }}
        </v-button>

        <v-button variant-color="light" size="small" class="alertControlsCancel" @click="cancelClicked">
          {{ cancelButton }}
        </v-button>
      </div>
    </main>
    <button class="closeIconWrapper" @click="closeClicked">
      <XMarkIcon :class="`${!$slots.default && !controls ? 'lowMT' : 'highMT'} alertCloseIcon`" />

    </button>
  </div>

</template>

<style scoped>
</style>
