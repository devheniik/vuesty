import type { ComponentPublicInstance } from 'vue'

export interface VRadioButtonEvents {
  'update:modelValue'? : (value: string) => void
}

export interface VRadioButtonProps extends VRadioButtonEvents {
  value: string | number | boolean | null,
  label?: string | number,
  modelValue: string | number | boolean | null
}

export type VRadioButtonComponent = ComponentPublicInstance<VRadioButtonProps>
