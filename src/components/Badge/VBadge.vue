<script setup lang="ts">
import type { Colors, Sizes, FontWeight } from '@/types/global/global'
import { XMarkIcon } from '@devheniik/icons'

const props = withDefaults(
  defineProps<{
    size?: Sizes
    variantColor?: Colors
    fontWeight?: FontWeight
    status?: boolean
    label: string
    icon?: boolean
    chip?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'small',
    variantColor: 'success',
    status: false,
    label: 'Label',
    icon: false,
    chip: false,
  }
)

interface Emits {
  (e: 'onClose'): void
}

const emit = defineEmits<Emits>()

const onClose = () => {
  emit('onClose')
}
</script>

<template>
  <div
    :class="[
      { status: status },
      `tag`,
      [!chip ? `tag-${props.variantColor}` : `bg-${props.variantColor}-900 text-white`],
      `tag-${props.size}`,
    ]">
    <div v-if="status" :class="`status-circle status-circle-${props.variantColor}`"></div>
    <div v-if="icon" class="mr-1 w-3.5">
      <slot></slot>
    </div>

    {{ label }}
    <button v-if="chip" class="pl-2" @click="onClose">
      <XMarkIcon class="w-3 stroke-2 opacity-50" />
    </button>

    <!-- <Icon v-if="icon" class="w-4 h-4" /> -->
    <!-- <div class="bg-success-1000 bg-danger-700 bg-warning-700 bg-primary-700"></div> -->
  </div>
</template>

<style scoped></style>
