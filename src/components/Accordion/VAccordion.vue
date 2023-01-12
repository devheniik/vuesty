<template>
  <div
  class="w-full  rounded-md shadow-sm "
  :class="{'bg-gray-100' : show}"
  @click="show = !show"
  >
    <div
    class="flex justify-between w-full p-3"
    :class="`${!show ? 'border-b' : 'border-none'}`">
      <h4 class="text-base font-bold">{{ label }}</h4>
      <button>
        <ChevronDownIcon v-if="!show" class="w-2.5" />
        <ChevronUpIcon v-else class="w-2.5" />
      </button>
    </div>
    <div
    class="inner  text-sm font-normal"
    :class="`
    ${!show ? 'max-h-0 overflow-hidden accordion-transition' :
    'max-h-96  p-3 overflow-auto hide-scroll accordion-transition'}`">
      <slot  />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {ChevronDownIcon, ChevronUpIcon} from '@devheniik/icons'
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
