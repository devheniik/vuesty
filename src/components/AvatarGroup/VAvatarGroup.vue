<script setup lang="ts">
type Colors =
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

type Sizes = 'tiny' | 'small' | 'medium' | 'big' | 'large' | 'huge' | 'gigantic'

withDefaults(
  defineProps<{
    size?: Sizes
    color?: Colors
    text?: string
  }>(),
  {
    size: 'large',
    color: 'primary',
  }
)
</script>

<template>
  <div :class="`v-avatar-group_${size} v-avatar-group_letters_${color} v-avatar_group_letters v-avatar-group`">
    <slot />
  </div>
</template>

<style lang="scss">
@import '../../assets/themes/main/components/avatarGroup.scss';
</style>
