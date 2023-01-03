<template>
  <div class="grid grid-cols-12 bg-gray-50">
    <NavigationPanel class="col-span-2 mr-5 border rounded-md mt-2" />
    <router-view class="col-span-10"></router-view>
  </div>
</template>

<script setup lang="ts">
import NavigationPanel from '../components/NavigationPanel.vue'
</script>

<style scoped></style>
