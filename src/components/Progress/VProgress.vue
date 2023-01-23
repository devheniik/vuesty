<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
  measure: string
  current: number
  total: number
}>(),
{
  current: 0,
  total: 150,
  measure: 'т'
}
)

const percent = computed(() => {
  return props.current /  (props.total / 100)
})


const progressPercent = computed(() => {
  if (percent.value < 1) {
    return 0
  }

  if (percent.value  > 1 ) {
    return percent.value + '%'
  }

  return 0
})
</script>

<template>
  <div class="v-progress">
    <span
    class="v-progress__badge v-progress__badge_current">{{current}} {{ measure}}</span>

    <div class="v-progress__body">
      <span
      :class="[{'v-progress_full': percent >= 100}, 'v-progress__body__colored']"
      :style="{ width: progressPercent }">
        <span v-if="percent < 100" class="v-progress__body__indicator"></span>
      </span>
    </div>

    <span class="v-progress__badge v-progress__badge_total">{{total}} {{ measure }}</span>

  </div>
</template>
