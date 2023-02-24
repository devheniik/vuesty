import type { VNode, ComponentPublicInstance } from 'vue'

export interface VModalEvents {
  'update:modelValue': () => void
}

export interface VModalProps extends VModalEvents {
  modelValue: boolean,
  width: string,
}

export interface VModalSlots {
  default: () => VNode[]
}

export type VModalComponent = ComponentPublicInstance<VModalProps>
