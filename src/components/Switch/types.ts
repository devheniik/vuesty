import type { ComponentPublicInstance, VNode } from 'vue'

export interface VSwitchEvents {
  'update:modelValue'?: () => void
}

export interface VSwitchProps extends VSwitchEvents {
  modelValue: boolean | number | null
  disabled?: boolean
  isSmall?: boolean
  alternativeColors?: boolean
}

export interface VSwitchSlots {
  component: () => VNode[]
  tooltip: () => VNode[]
}

export type VSwitchComponent = ComponentPublicInstance<VSwitchProps>
