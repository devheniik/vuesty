<template>
  <div class="tag" :class="classes">
    <div v-if="statusCircle && isBasicColor" class="status-circle" :class="statusCircleClasses"></div>
    <component :is="icon" v-if="icon" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  // leftIcon: {
  //   type: String,
  //   default: '',
  // },
  // rightIcon: {
  //   type: String,
  //   default: '',
  // },
  icon: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'small',
  },
  backgroundColor: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: '',
  },
  statusCircle: {
    type: Boolean,
    default: false,
  }
})

const classes = computed(() =>
`tag-${props.backgroundColor}`,
)

const statusCircleClasses = computed(() =>
[(props.statusCircle && isBasicColor) ? `status-circle-${props.backgroundColor}` : '']
)


const isBasicColor = computed(() => {
  const colors = ['primary', 'warning', 'success', 'danger']
  return colors.includes(props.backgroundColor)
})
</script>

<style scoped></style>
