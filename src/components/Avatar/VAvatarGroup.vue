<script setup lang="ts">
import { computed } from 'vue'
import type { Sizes, Colors as GlobalColors } from '@/types/global/global'
import type { MainColors } from './types'

const props = withDefaults(
  defineProps<{
    size?: Sizes // !TODO pass sizes and add default size !(Now your default type is 'small' it bad)
    color?: GlobalColors
    src?: string
    alt?: string
    width?: number
    height?: number
    text?: string
    status?: MainColors
  }>(),
  {
    size: 'medium',
    color: 'primary',
  }
)

// interface AvatarAttributesInterface {
//   width?: number
//   height?: number
// }

// const attrs = computed<AvatarAttributesInterface>(() => {
//   const attributes: AvatarAttributesInterface = {}

//   if (props.width) {
//     attributes.width = props.width
//   }

//   if (props.height) {
//     attributes.height = props.height
//   }

//   return attributes
// })

const sizes = computed(() => {
  if (props.size === 'tiny') {
    return ['h-4', 'w-4']
  }
  if (props.size === 'small') {
    return ['h-6', 'w-6']
  }
  if (props.size === 'medium') {
    return ['h-8', 'w-8']
  }
  if (props.size === 'big') {
    return ['h-10', 'w-10']
  }
  if (props.size === 'large') {
    return ['h-12', 'w-12']
  }
  if (props.size === 'huge') {
    return ['h-16', 'w-16']
  }
  if (props.size === 'gigantic') {
    return ['h-20', 'w-20']
  } else return ''
})
</script>

<template>
  <span>{{ sizes[0] }}</span>
  <span>{{ sizes[1] }}</span>

  <div
    :class="`avatar-group flex
  [&>.avatar]:-mr-3
  [&>.avatar]:${sizes[0]}
  [&>.avatar]:${sizes[1]} `">
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
