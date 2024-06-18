import type { ComponentPublicInstance } from 'vue'

export interface VCheckboxEvents {
  'update:modelValue'?: () => void
}

export interface VCheckboxProps extends VCheckboxEvents {
  label?: string
  disabled?: boolean
  error?: boolean
  modelValue?: boolean | null
}

export type VCheckboxComponent = ComponentPublicInstance<VCheckboxProps>
