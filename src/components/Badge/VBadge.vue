<script setup lang="ts">
import { CloseMdIcon } from '@devheniik/icons'
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
    label?: string | number
    iconLeft?: boolean
    iconRight?: boolean
    chip?: boolean
  }>(),
  {
    size: 'small',
    color: 'neutral',
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

const color = computed(() => `v-tag-${props.color}`)
</script>

<template>
  <div :class="[color, { 'v-tag-status-text': status }, {'v-tag__spacer' : (iconLeft || iconRight) }  , 'v-tag']">
    <div v-if="status" :class="['v-tag__status-circle', `v-tag__status-circle_${props.color}`]"></div>

    <div v-if="iconLeft" class="v-tag__icon">
      <slot></slot>
    </div>

    <span>
      {{ label }}
    </span>

    <div v-if="iconRight" class="v-tag__icon">
      <slot></slot>
    </div>

    <button v-if="chip" class="v-tag__chip" @click="onClose">
      <CloseMdIcon class="v-tag__chip__icon" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/themes/main/components/badge.scss';
</style>
