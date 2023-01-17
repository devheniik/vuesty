<template>
<<<<<<< HEAD
  <button class="relative" @click="onNotification">
    <BellIcon class="w-6" />
    <div class="notification" :class="`${String(number).length > 2 ? '-right-4' : '-right-1'}`">{{ number }}</div>
=======
  <button class="relative notification-icon" @click="onNotification">
    <slot>
      <BellIcon />
    </slot>

    <div
    class="notification"
    :class="`${(String(number).length > 2) ? '-right-4' : '-right-1'}`"
    >
    {{ number }}
    </div>
>>>>>>> 4ca898895455f5bf8d24b13d301d67683ddb61c1
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

<style>
.notification {
  @apply absolute top-0 flex items-center justify-center  rounded-full border-2 border-white bg-primary-500 py-px px-[3px]  text-[10px] font-bold leading-[10px] text-white;
}

.notification-icon > svg {
  @apply w-6
}
</style>
