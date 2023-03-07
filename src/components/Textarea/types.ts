import type { ComponentPublicInstance, VNode } from 'vue'

export interface VTextareaProps  {
  modelValue: string
  rows?: string | number
  error?: boolean
}


export interface VTextareaSlots {
  default: () => VNode[]
}

export type VTextareaComponent = ComponentPublicInstance<VTextareaProps>
