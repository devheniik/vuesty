import type { ComponentPublicInstance, VNode } from 'vue'

export interface VTextareaProps  {
  rows?: string |number
}


export interface VTextareaSlots {
  default: () => VNode[]
}

export type VTextareaComponent = ComponentPublicInstance<VTextareaProps>
