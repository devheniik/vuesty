<template>
<<<<<<< Updated upstream
  <button>
    <slot />
=======
  <button
    :disabled="disabled"
    class="flex btn"
    :class="{ 'btn-disabled': disabled }">
    <component :is="leftIcon" class="w-5 mr-2" />
    <slot />
    <component :is="rightIcon" class="w-5 ml-2" />
    <component :is="icon" class="h-9 w-5" />
>>>>>>> Stashed changes
  </button>
</template>

<script setup lang="ts">

<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
</script>

<style scoped></style>
