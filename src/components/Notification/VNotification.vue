<script setup lang="ts">
import { BellIcon } from '@devheniik/icons'
withDefaults(
  defineProps<{
    count?: number
  }>(),
  {
    count: 0,
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

<template>
  <button class="notification-icon relative" @click="onNotification">
    <slot>
      <BellIcon />
    </slot>

    <div class="notification" :class="`${String(count).length > 2 ? '-right-4' : '-right-1'}`">
      {{ count }}
    </div>
  </button>
</template>

<style></style>
