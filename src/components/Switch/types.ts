import type { ComponentPublicInstance, VNode } from 'vue'

export interface VSwitchEvents {
  'update:modelValue'?: () => void
}

export interface VSwitchProps extends VSwitchEvents {
  modelValue: boolean | number
  disabled?: boolean
}

export interface VSwitchSlots {
  component: () => VNode[]
  tooltip: () => VNode[]
}

export type VSwitchComponent = ComponentPublicInstance<VSwitchProps>
