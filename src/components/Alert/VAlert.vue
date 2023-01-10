<script setup lang="ts">
import type {Colors} from "./types"
import {InformationCircleIcon} from '@devheniik/icons'
import {XMarkIcon} from '@devheniik/icons'
import VButton from '../Button/VButton.vue';

interface Emits {
  (e: 'closeClicked'): void;
  (e: 'okClicked'): void;
  (e: 'cancelClicked'): void;
}

const emit = defineEmits<Emits>();

const closeClicked = () => {
  emit('closeClicked')
}

const okClicked = () => {
  emit('okClicked')
}

const cancelClicked = () => {
  emit('cancelClicked')
}

withDefaults(defineProps<{
  variantColor?: Colors,
  label: string,
  okButton?: string,
  cancelButton?: string,
  controls?: boolean
}>(), {
  variantColor: 'primary',
  label: "Label",
  okButton: 'Ok',
  cancelButton: 'Cancel',
  controls: true,
})

</script>

<template>
  <div class="flex justify-between rounded bg-white shadow-md w-[500px] pr-4">
    <div :class="`bg-${variantColor}-500 w-1 rounded-tl-md rounded-bl-md`"></div>
    <InformationCircleIcon
    :class="`w-5 text-${variantColor}-500 self-start ${(!$slots.default && !controls) ? 'mt-2' : 'mt-2.5' }`"/>
    <main class="flex flex-col  w-10/12 py-2">
      <h4 class="text-base leading-5 font-semibold">{{label}}</h4>
      <p class="text-sm"><slot /></p>
      <div v-if="controls" class="flex mt-2">
        <v-button
        size="tiny"
        class="text-sm"
        @click="okClicked">
        {{ okButton }}
        </v-button>

        <v-button
        variant-color="light"
        size="tiny"
        class="text-sm ml-2.5"
        @click="cancelClicked">
        {{ cancelButton }}
        </v-button>
      </div>
    </main>
    <button class="self-start" @click="closeClicked">
      <XMarkIcon
      :class="`${(!$slots.default && !controls) ? 'mt-2' : 'mt-4' } w-4 h-4`" />
    </button>
    </div>
  <!-- <div>
    <div class="p-5 text-success-500 rounded-full bg-danger-500">text</div>
    <div class="p-5 text-warning-500 rounded-full bg-success-500">text</div>
    <div class="p-5 text-danger-500 rounded-full bg-warning-500"></div>
    <div class="p-5 text-primary-500 rounded-full bg-primary-500"></div>
  </div> -->
</template>



<style scoped>
</style>
