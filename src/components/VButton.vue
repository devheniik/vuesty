<template>
  <button
    :disabled="disabled" class="btn flex"
    :class="[
      { 'btn-disabled': disabled },
      `btn-${variant}`,
      `btn-${size || 'small'}`,
      `btn-${backgroundColor}-${colorBold}`,
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark', // !TODO pass variants
  disabled: boolean,
  size: 'tiny' | 'small' | 'medium' | 'large', // !TODO pass sizes and add default size !(Now your default type is 'small' it bad)
  backgroundColor: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark', // !TODO pass colors
  colorBold: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
}>(), {
  // here we have default values
  variant: 'primary',
  disabled: false,
  size: 'small',
  backgroundColor: 'primary',
  colorBold: 500,
})



</script>

<style scoped>
@import '.././assets/themes/main/components/button.scss';
</style>
