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
  (e: 'notification'): void
}

const emit = defineEmits<Emits>()

const onNotification = () => {
  emit('notification')
}

const countSpacer = computed(() => {
  return String(props.count).length > 2 ? 'v-right-medium' : 'v-right-small'
})
</script>

<template>
  <button class="v-notification__btn" @click="onNotification">
    <slot>
      <BellIcon />
    </slot>

    <div class="v-notification" :class="countSpacer">
      {{ count }}
    </div>
  </button>
</template>

<style lang="scss" scoped>
@import "src/assets/themes/main/components/notification.scss";
</style>
