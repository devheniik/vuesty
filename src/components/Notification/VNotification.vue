<script setup lang="ts">
import { BellIcon } from '@devheniik/icons'
import { computed } from 'vue';
const props = withDefaults(
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

const countSpacer = computed(() => {
  return String(props.count).length > 2 ? 'v_right-medium' : 'v_right-small'
})
</script>

<template>
  <button class="v_notification-btn" @click="onNotification">
    <slot>
      <BellIcon />
    </slot>

    <div class="v_notification" :class="countSpacer">
      {{ count }}
    </div>
  </button>
</template>

<style></style>
