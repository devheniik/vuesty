<script setup lang="ts">
import { XMarkIcon } from '@devheniik/icons'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    color?:
      | 'primary'
      | 'secondary'
      | 'light'
      | 'success'
      | 'warning'
      | 'danger'
      | 'upgrade'
      | 'tertiary'
      | 'info'
      | 'neutral'
    status?: boolean
    label?: string
    icon?: boolean
    chip?: boolean
  }>(),
  {
    size: 'small',
    color: 'success',
    status: false,
    label: 'Label',
    icon: false,
    chip: false,
  }
)

interface Emits {
  (e: 'close'): void
}

const emit = defineEmits<Emits>()

const onClose = () => {
  emit('close')
}

<<<<<<< HEAD
const chipColor = computed(() => `v_bg-${props.color}-heavy`)
const tagColor = computed(() => `v_tag-${props.color}`)
=======
const sizes = computed(() => {
  return {
    tiny: 'tag-tiny',
    small: 'tag-small',
    medium: 'tag-medium',
    big: 'tag-big',
    large: 'tag-large',
    huge: 'tag-huge',
    gigantic: 'tag-gigantic',
  }
})

const colors = computed(() => {
  if (props.chip) {
    return {
      primary: 'bg-primary-900',
      success: 'bg-success-900',
      secondary: 'bg-secondary-900',
      light: 'bg-light-900',
      warning: 'bg-warning-900',
      danger: 'bg-danger-900',
      upgrade: 'bg-upgrade-900',
      tertiary: 'bg-tertiary-900',
      info: 'bg-info-900',
      neutral: 'bg-neutral-900',
    }
  } else {
    return {
      primary: 'tag-primary',
      success: 'tag-success',
      secondary: 'tag-secondary',
      light: 'tag-light',
      warning: 'tag-warning',
      danger: 'tag-danger',
      upgrade: 'tag-upgrade',
      tertiary: 'tag-tertiary',
      info: 'tag-info',
      neutral: 'tag-neutral',
    }
  }
})
>>>>>>> valert
</script>

<template>
<<<<<<< HEAD
  <div :class="[{ 'v_tag-chip-text': chip }, { 'v_tag-status-text': status }, chip && chipColor, !chip && tagColor, 'v_tag']">
    <div v-if="status" :class="['v_tag__status-circle', `v_tag__status-circle_${props.color}`]"></div>

    <div v-if="icon" class="v_tag__icon">
=======
  <div class="tag" :class="[{ 'text-white': chip }, { status: status }, colors[variantColor]]">
    <div v-if="status" :class="`status-circle status-circle-${props.variantColor}`"></div>
    <div v-if="icon" class="mr-1 w-3.5">
>>>>>>> valert
      <slot></slot>
    </div>

    {{ label }}
<<<<<<< HEAD
    <button v-if="chip" class="v_tag__chip" @click="onClose">
      <XMarkIcon class="v_tag__chip__icon" />
=======
    <button v-if="chip" class="pl-2" @click="onClose">
      <XMarkIcon class="w-3 stroke-2 opacity-50" />
>>>>>>> valert
    </button>
  </div>
</template>

<style></style>
