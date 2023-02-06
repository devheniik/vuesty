<script setup lang="ts">
import { ref } from 'vue'
import { ExclamationCircleIcon, EnvelopeIcon } from '@devheniik/icons'

const props = withDefaults(
  defineProps<{
    modelValue: string
    valid?: boolean
    invalid?: boolean
    disabled?: boolean
    readonly?: boolean
    placeholder?: string
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
    clearable?: boolean
    name?: string
    applyColorToLeftIcon?: boolean
    applyColorToRightIcon?: boolean
  }>(),
  {
    type: 'text',
    valid: false,
    invalid: false,
    disabled: false,
    readonly: false,
    clearable: false,
    name: 'input',
    applyColorToLeftIcon: true,
    applyColorToRightIcon: true,
  }
)
</script>

<template>
  <div class="v-input">
<!--    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">-->
<!--      <EnvelopeIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />-->
<!--    </div>-->
    <input
      :id="name"
      :type="type"
      :name="name"
      :class="['v-input__input', 'v-input__input-success']"
      :placeholder="placeholder"
      :value="modelValue"
      :aria-invalid="invalid"
      :aria-describedby="`${name}-description`"
      v-bind="{ ...(invalid && { ariaDescribedby: `${name}-error` }) }" />
    <div class="v-input__icon-left-box">
      <slot name="icon-left" class=""/>
    </div>
  </div>
</template>

<style scoped>
:slotted(svg) {
  @apply h-5 w-5;
}
</style>

