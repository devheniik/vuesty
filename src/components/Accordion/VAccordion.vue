<template>
  <div :class="['v_accordion', { 'bg-gray-100': bg && show }]" @click="handleShow">
    <div :class="['v_accordion__header', { v_accordion__header__border: border }]">
      <slot name="header">
        <h4 class="v_accordion__header__label">{{ label }}</h4>
      </slot>
      <button>
        <ChevronDownIcon v-if="!show" class="v_accordion__header__icon" />
        <ChevronUpIcon v-else class="v_accordion__header__icon" />
      </button>
    </div>
    <!-- TODO: animation-->
    <transition
      enter-active-class="v_accordion-show"
      enter-from-class="v_accordion-close-h"
      enter-to-class="v_accordion-show-h"
      leave-active-class="v_accordion-close"
      leave-from-class="v_accordion-show-h"
      leave-to-class="v_accordion-close-h"
    >
      <div v-show="show" class="v_accordion__body">
        <slot> </slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDownIcon, ChevronUpIcon } from '@devheniik/icons'
const props = withDefaults(
  defineProps<{
    bg: boolean
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

<style scoped lang="scss">
@import '../../assets/themes/main/components/accordion.scss';
</style>
