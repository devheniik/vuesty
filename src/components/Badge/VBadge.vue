<script setup lang="ts">
import type { Colors, Sizes, FontWeight } from '@/types/global/global'
import { XMarkIcon } from '@devheniik/icons'

const props = withDefaults(
  defineProps<{
    size?: Sizes
    variantColor?: Colors
    fontWeight?: FontWeight
    status?: boolean
    closeable?: boolean
    // icon?: string,
  }>(),
  {
    variant: 'primary',
    size: 'small',
    variantColor: 'success',
    status: false,
    closeable: false,
    // icon: 'BeakerIcon'
  }
)
</script>

<template>
  <div :class="[{ status: status }, `tag`, `tag-${props.variantColor}`, `tag-${props.size}`]">
    <div v-if="status" :class="`status-circle status-circle-${props.variantColor}`"></div>
    <slot></slot>
    <button v-if="closeable" class="pl-2">
      <XMarkIcon class="w-3 opacity-50 stroke-2" />
    </button>
    <!-- <Icon v-if="icon" class="w-4 h-4" /> -->
  </div>
</template>

<style scoped>

</style>
