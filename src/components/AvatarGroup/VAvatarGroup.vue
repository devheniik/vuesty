<script setup lang="ts">
type Sizes = 'tiny' | 'small' | 'medium' | 'big' | 'large' | 'huge' | 'gigantic'

withDefaults(
  defineProps<{
    size?: Sizes
  }>(),
  {
    size: 'large',
  }
)
</script>

<template>
  <div :class="`v-avatar-group_${size}  v-avatar-group`">
    <slot />
  </div>
</template>

<style lang="scss">
@import '../../assets/themes/main/components/avatarGroup.scss';
</style>
