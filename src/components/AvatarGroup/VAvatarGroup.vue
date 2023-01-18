<script setup lang="ts">
import type { Sizes, Colors as GlobalColors } from '@/types/global/global';

withDefaults(
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

</script>

<template>
  <div class="avatar-group" :class="`avatar-group_${size}`">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
</style>
