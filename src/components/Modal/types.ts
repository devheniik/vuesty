import type { VNode, ComponentPublicInstance } from 'vue'

export interface VModalEvents {
  'update:modelValue'?: () => void
}

export interface VModalProps extends VModalEvents {
  heading: string
  modelValue: boolean
  width: string
  bgWhite: boolean
}

export interface VModalSlots {
  default: () => VNode[]
}

export type VModalComponent = ComponentPublicInstance<VModalProps>
