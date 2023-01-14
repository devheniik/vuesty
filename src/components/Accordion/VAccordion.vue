<template>
  <div class="w-full rounded-md shadow-sm" :class="{ 'bg-gray-100': show }" @click="show = !show">
    <div class="flex w-full justify-between p-3" :class="`${!show ? 'border-b' : 'border-none'}`">
      <h4 class="text-base font-bold">{{ label }}</h4>
      <button>
        <ChevronDownIcon v-if="!show" class="w-2.5" />
        <ChevronUpIcon v-else class="w-2.5" />
      </button>
    </div>
    <div
      class="inner text-sm font-normal"
      :class="`
    ${
      !show
        ? 'accordion-transition max-h-0 overflow-hidden'
        : 'hide-scroll  accordion-transition max-h-96 overflow-auto p-3'
    }`">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDownIcon, ChevronUpIcon } from '@devheniik/icons'
withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: 'Title',
  }
)

const show = ref(false)
</script>

<style scoped>
.accordion-transition {
  transition-property: max-height padding;
  transition-timing-function: ease-in-out;
  transition-duration: 400ms;
}
</style>
