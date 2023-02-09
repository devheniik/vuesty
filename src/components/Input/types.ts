import type { VNode, ComponentPublicInstance } from 'vue'

export interface VInputEvents {
  leftClick?: () => void
  rightClick?: () => void
  ['update:modelValue']?: () => void
}

export interface VInputProps extends VInputEvents {
  modelValue: string
  _valid?: boolean
  _invalid?: boolean
  disabled?: boolean
  readonly?: boolean
  placeholder?: string | false
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  rules?: 'any' | 'stringNumbers' | 'string' | 'numbers' | 'integer' | 'volume' | 'currency' | RegExp
  clearable?: boolean
  name?: string
  applyColorToLeftIcon?: boolean
  applyColorToRightIcon?: boolean
  min?: number | false
  max?: number | false
  allocateValid?: boolean
  require?: boolean
  prevent?: boolean
}

export interface VInputSlots {
  default: () => VNode[]
  loadingSlot: () => VNode[]
}

export type VInputComponent = ComponentPublicInstance<VInputProps>