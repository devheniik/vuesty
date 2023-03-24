import type { ComponentPublicInstance } from 'vue'

export interface VPhoneInputEvents {
  'update:modelValue'? : (value: string) => void
}

export interface VPhoneInputProps extends VPhoneInputEvents {
  modelValue: string
}

export type VPhoneInputComponent = ComponentPublicInstance<VPhoneInputProps>
