<template>
  <button
    :disabled="disabled"
    class="flex btn"
    :class="{ 'btn-disabled': disabled }">
    <component :is="leftIcon" class="w-5 mr-2" />
    <slot />
    <component :is="rightIcon" class="w-5 ml-2" />
    <component :is="icon" class="h-9 w-5" />
  </button>
</template>

<script setup lang="ts">

defineProps({
  leftIcon: {
    type: String,
    default: '',
  },
  rightIcon: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped></style>
