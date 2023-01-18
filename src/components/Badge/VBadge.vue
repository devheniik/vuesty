<script setup lang="ts">
import { XMarkIcon } from '@devheniik/icons'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    color?:
      | 'primary'
      | 'secondary'
      | 'light'
      | 'success'
      | 'warning'
      | 'danger'
      | 'upgrade'
      | 'tertiary'
      | 'info'
      | 'neutral'
    status?: boolean
    label: string
    icon?: boolean
    chip?: boolean
  }>(),
  {
    size: 'small',
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
const tagColor = computed(() => `v_tag-${props.color}`)
</script>

<template>
  <div :class="[{ 'v_tag-chip-text': chip }, { 'v_tag-status-text': status }, chip && chipColor, !chip && tagColor, 'v_tag']">
    <div v-if="status" :class="['v_tag__status-circle', `v_tag__status-circle_${props.color}`]"></div>

    <div v-if="icon" class="v_tag__icon">
      <slot></slot>
    </div>

    {{ label }}
    <button v-if="chip" class="v_tag__chip" @click="onClose">
      <XMarkIcon class="v_tag__chip__icon" />
    </button>
  </div>
</template>

<style></style>
