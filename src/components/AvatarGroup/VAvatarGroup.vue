<script setup lang="ts">
import { computed } from 'vue'
import type { Sizes, Colors as GlobalColors } from '@/types/global/global'

const props = withDefaults(
  defineProps<{
    size?: Sizes
    color?: GlobalColors
    text?: string
  }>(),
  {
    size: 'large',
    color: 'primary',
  }
)

const sizes = computed(() => {
  if (props.size === 'tiny') {
    return '[&>.avatar]:h-4 [&>.avatar]:w-4 [&>.avatar]:-mr-1.5'
  }
  if (props.size === 'small') {
    return '[&>.avatar]:h-6 [&>.avatar]:w-6 [&>.avatar]:-mr-2'
  }
  if (props.size === 'medium') {
    return '[&>.avatar]:h-8 [&>.avatar]:w-8 [&>.avatar]:-mr-3'
  }
  if (props.size === 'big') {
    return '[&>.avatar]:h-10 [&>.avatar]:w-10 [&>.avatar]:-mr-3'
  }
  if (props.size === 'large') {
    return '[&>.avatar]:h-12 [&>.avatar]:w-12 [&>.avatar]:-mr-4'
  }

  if (props.size === 'huge') {
    return '[&>.avatar]:h-16 [&>.avatar]:w-16 [&>.avatar]:-mr-5'
  }

  if (props.size === 'gigantic') {
    return '[&>.avatar]:h-20 [&>.avatar]:w-20 [&>.avatar]:-mr-6'
  } else return ''
})
</script>

<template>
  <div class="avatar-group flex [&>.avatar]:-mr-3" :class="`${sizes}`">
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
