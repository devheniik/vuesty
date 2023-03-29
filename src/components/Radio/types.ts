import type { ComponentPublicInstance } from 'vue'

export interface VRadioButtonEvents {
  'update:modelValue'? : (value: string) => void
}

export interface VRadioButtonProps extends VRadioButtonEvents {
  name: string,
  value: string | number,
  label?: string,
  modelValue: string | number
}

export type VRadioButtonComponent = ComponentPublicInstance<VRadioButtonProps>
