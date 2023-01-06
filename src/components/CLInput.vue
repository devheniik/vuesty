<template>
  <div>
    <label>Click me
      <input type="text">
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: {
    type: string,
    default: ''
  },
  // icon: {
  //   type:
  // }
}>()
</script>

<style scoped>

</style>
