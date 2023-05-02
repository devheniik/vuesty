import type { ComponentPublicInstance, VNode } from 'vue'

export interface VSwitchEvents {
  'update:modelValue'?: () => void
}

export interface VSwitchProps extends VSwitchEvents {
  modelValue: boolean
  disabled?: boolean
}

export interface VSwitchSlots {
  default: () => VNode[]
}

export type VSwitchComponent = ComponentPublicInstance<VSwitchProps>
