<template>
  <div
  class="w-full  rounded-md shadow-sm "
  :class="{'bg-gray-100' : (bg && show)}"
  @click="show = !show"
  >
    <div
    class="flex justify-between w-full p-3 border-b">
      <slot name="header">
        <h4 class="text-base font-bold"> label </h4>
      </slot>
      <button>
        <ChevronDownIcon v-if="!show" class="w-2.5" />
        <ChevronUpIcon v-else class="w-2.5" />
      </button>
    </div>
    <div
    class="inner text-sm font-normal pl-3"
    :class="`
    ${!show ? 'max-h-0 overflow-hidden accordion-transition' :
    'max-h-96 overflow-auto hide-scroll mt-3 accordion-transition'}`">
      <slot>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum enim corrupti modi illo doloremque quo blanditiis aliquid corporis eligendi explicabo.</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {ChevronDownIcon, ChevronUpIcon} from '@devheniik/icons'
withDefaults(
  defineProps<{
    bg: boolean
  }>(),
  {
    bg: true,
  }
)

const show = ref(false)
</script>

<style scoped>

.accordion-transition {
  transition-property: margin max-height ;
  transition-timing-function: ease-out;
  transition-duration: 300ms;
}
</style>
