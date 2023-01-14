<template>
  <button class="relative" @click="onNotification">
    <BellIcon class="w-6" />
    <div class="notification" :class="`${String(number).length > 2 ? '-right-4' : '-right-1'}`">{{ number }}</div>
  </button>
</template>

<script setup lang="ts">
import { BellIcon } from '@devheniik/icons'
withDefaults(
  defineProps<{
    number?: number
  }>(),
  {
    number: 0,
  }
)

interface Emits {
  (e: 'onNotification'): void
}
const emit = defineEmits<Emits>()

const onNotification = () => {
  emit('onNotification')
}
</script>

<style scoped>
.notification {
  @apply absolute top-0 flex items-center justify-center  rounded-full border-2 border-white bg-primary-500 py-px px-[3px]  text-[10px] font-bold leading-[10px] text-white;
}
</style>
