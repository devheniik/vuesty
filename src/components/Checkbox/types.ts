import type { ComponentPublicInstance } from 'vue'

export interface VCheckboxEvents {
  'update:modelValue'?: () => void
}

export interface VCheckboxProps extends VCheckboxEvents {
  label?: string
  disabled?: boolean
  error?: boolean
  value: boolean
}

export type VCheckboxComponent = ComponentPublicInstance<VCheckboxProps>
