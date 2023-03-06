import type { ComponentPublicInstance, VNode } from 'vue'

export interface VTextareaProps  {
  modelValue: string
  rows?: string | number
}


export interface VTextareaSlots {
  default: () => VNode[]
}

export type VTextareaComponent = ComponentPublicInstance<VTextareaProps>
