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
  (e: 'showNotifications'): void
}

const emit = defineEmits<Emits>()

const onNotification = () => {
  emit('showNotifications')
}
</script>

<template>
  <button class="notification-icon relative" @click="onNotification">
    <slot>
      <BellIcon />
    </slot>

    <div v-if="count" class="notification" :class="`${String(count).length > 2 ? '-right-4' : String(count).length === 2 ? '-right-3' : '-right-1'}`">
      {{ count }}
    </div>
  </button>
</template>

<style lang="scss" scoped>
@import '../../assets/themes/main/components/notification.scss';
</style>
