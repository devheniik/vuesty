<script setup lang="ts">
import type { Colors, Sizes, FontWeight } from '@/types/global/global';
// import { BeakerIcon } from '@devheniik/icons';

const props = withDefaults(defineProps<{
  size?: Sizes
  variantColor?: Colors
  fontWeight?: FontWeight,
  status: boolean,
  // icon?: string,
}>(), {
  variant: 'primary',
  size: 'small',
  variantColor: 'success',
  status: false,
  // icon: 'BeakerIcon'
})

</script>

<template>
  <div
  :class="[
    {'status':status},
    `tag`,
    `tag-${props.variantColor}`,
    `tag-${props.size}`,
  ]"

>
  <div v-if="status" :class="`status-circle status-circle-${props.variantColor}`"></div>
  <slot></slot>
  <!-- <Icon v-if="icon" class="w-4 h-4" /> -->
  </div>
</template>



<style scoped>
</style>
