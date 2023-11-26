<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDownIcon, ChevronUpIcon } from '@devheniik/icons'

const props = withDefaults(
  defineProps<{
    bg?: boolean
    modelValue?: boolean
    label?: string
    border?: boolean
  }>(),
  {
    bg: true,
    border: false,
    modelValue: false,
    label: 'Label',
  }
)

interface Emits {
  (event: 'update:modelValue', value: boolean): void
}

const emit = defineEmits<Emits>()

const show = ref<boolean>(props.modelValue)

const handleShow = () => {
  show.value = !show.value
  emit('update:modelValue', show.value)
}
</script>

<template>
  <div :class="['v-accordion', { 'v-bg-gray-100': bg && show }]" @click="handleShow">
    <div :class="['v-accordion__header', { 'v-accordion__header__border': border }]">
      <h4 class="v-accordion__header__label">
        <slot name="header">
          {{ label }}
        </slot>
      </h4>
      <button>
        <ChevronDownIcon v-if="!show" class="v-accordion__header__icon" />
        <ChevronUpIcon v-else class="v-accordion__header__icon" />
      </button>
    </div>
    <transition
      enter-active-class="v-accordion-show"
      enter-from-class="v-accordion-close-h"
      enter-to-class="v-accordion-show-h"
      leave-active-class="v-accordion-close"
      leave-from-class="v-accordion-show-h"
      leave-to-class="v-accordion-close-h">
      <div v-show="show" class="v-accordion__body">
        <slot> </slot>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/themes/main/components/accordion.scss';
</style>
