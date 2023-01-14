<script setup lang="ts">
import type { Colors } from './types'
import { InformationCircleIcon } from '@devheniik/icons'
import { XMarkIcon } from '@devheniik/icons'
import VButton from '../Button/VButton.vue'

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
</script>

<template>
  <div class="flex w-[500px] justify-between rounded bg-white pr-4 shadow-md">
    <div :class="`bg-${variantColor}-500 w-1 rounded-tl-md rounded-bl-md`"></div>
    <InformationCircleIcon
      :class="`w-5 text-${variantColor}-500 self-start ${!$slots.default && !controls ? 'mt-2' : 'mt-2.5'}`" />
    <main class="flex w-10/12 flex-col py-2">
      <h4 class="text-base font-semibold leading-5">{{ label }}</h4>
      <p class="text-sm"><slot /></p>
      <div v-if="controls" class="mt-2 flex">
        <v-button size="tiny" class="text-sm" @click="okClicked">
          {{ okButton }}
        </v-button>

        <v-button variant-color="light" size="tiny" class="ml-2.5 text-sm" @click="cancelClicked">
          {{ cancelButton }}
        </v-button>
      </div>
    </main>
    <button class="self-start" @click="closeClicked">
      <XMarkIcon :class="`${!$slots.default && !controls ? 'mt-2' : 'mt-4'} w-4 stroke-2 opacity-50`" />
    </button>
  </div>
  <!-- <div>
    <div class="p-5 text-success-500 rounded-full bg-danger-500">text</div>
    <div class="p-5 text-warning-500 rounded-full bg-success-500">text</div>
    <div class="p-5 text-danger-500 rounded-full bg-warning-500"></div>
    <div class="p-5 text-primary-500 rounded-full bg-primary-500"></div>
  </div> -->
</template>

<style scoped></style>
