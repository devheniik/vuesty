<template>
  <button :disabled="disabled" class="btn flex" :class="classes">
    <component :is="leftIcon" class="mr-2 w-5" />
    <slot />
    <component :is="rightIcon" class="ml-2 w-5" />
    <component :is="icon" class="h-9 w-5" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  leftIcon: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: '',
  },
  rightIcon: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'small',
  },
  backgroundColor: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: '',
  },
})

const classes = computed(() => [
  { 'btn-disabled': props.disabled },
  [`btn-${props.variant}`],
  [`btn-${props.size || 'small'}`],
  props.variant === 'primary' ? `btn-${props.backgroundColor}` : '',
])
</script>

<style scoped></style>
