<script setup lang="ts">
import type { Colors } from '@/types/global/global'
import { XMarkIcon } from '@devheniik/icons'
import {computed} from 'vue'

const props = withDefaults(
  defineProps<{
    variantColor?: Colors
    status?: boolean
    label: string
    icon?: boolean
    chip?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'small',
    variantColor: 'success',
    status: false,
    label: 'Label',
    icon: false,
    chip: false,
  }
)

interface Emits {
  (e: 'onClose'): void
}

const emit = defineEmits<Emits>()

const onClose = () => {
  emit('onClose')
}

const sizes = computed(() => {
  return {
    tiny: 'tag-tiny',
    small: 'tag-small',
    medium: 'tag-medium',
    big: 'tag-big',
    large:  'tag-large',
    huge: 'tag-huge',
    gigantic: 'tag-gigantic',
  }
})

const colors = computed(() => {
  if(props.chip) {

    return {
      primary: "bg-primary-900",
      success:  "bg-success-900",
      secondary: "bg-secondary-900",
      light: "bg-light-900",
      warning: "bg-warning-900",
      danger: "bg-danger-900",
      upgrade: "bg-upgrade-900",
      tertiary: "bg-tertiary-900",
      info: "bg-info-900",
      neutral: "bg-neutral-900",
  }}
  else {
    return {
      primary: "tag-primary",
      success:  "tag-success",
      secondary: "tag-secondary",
      light: "tag-light",
      warning: "tag-warning",
      danger: "tag-danger",
      upgrade: "tag-upgrade",
      tertiary: "tag-tertiary",
      info: "tag-info",
      neutral: "tag-neutral",
    }
  }
})

</script>
<template>
  <div
  class="tag"
  :class="[
    {'text-white': chip},
    {'status': status},
    colors[variantColor]
  ]">

    <div
    v-if="status"
    :class="`status-circle status-circle-${props.variantColor}`"></div>
    <div
    v-if="icon"
    class="w-3.5 mr-1">
      <slot></slot>
    </div>

    {{ label }}
    <button
    v-if="chip"
    class="pl-2"
    @click="onClose">
      <XMarkIcon class="w-3 opacity-50 stroke-2" />
    </button>
  </div>
</template>

<style>
</style>
