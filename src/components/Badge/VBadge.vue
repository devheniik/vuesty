<script setup lang="ts">
import { XMarkIcon } from '@devheniik/icons'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    color?:
      | 'primary'
      | 'success'
      | 'warning'
      | 'danger'
      | 'upgrade'
      | 'tertiary'
      | 'info'
      | 'neutral'
    status?: boolean
    label?: string
    icon?: boolean
    chip?: boolean
  }>(),
  {
    color: 'success',
    status: false,
    label: 'Label',
    icon: false,
    chip: false,
  }
)

interface Emits {
  (e: 'close'): void
}

const emit = defineEmits<Emits>()

const onClose = () => {
  emit('close')
}

const chipColor = computed(() => `v_bg-${props.color}-heavy`)
const tagColor = computed(() => `v-tag-${props.color}`)
</script>

<template>
  <div :class="[{ 'v-tag-chip-text': chip }, { 'v-tag-status-text': status }, chip && chipColor, !chip && tagColor, 'v-tag']">
    <div v-if="status" :class="['v-tag__status-circle', `v-tag__status-circle_${props.color}`]"></div>

    <div v-if="icon" class="v-tag__icon">
      <slot></slot>
    </div>

    {{ label }}
    <button v-if="chip" class="v-tag__chip" @click="onClose">
      <XMarkIcon class="v-tag__chip__icon" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/themes/main/components/badge.scss";
</style>
