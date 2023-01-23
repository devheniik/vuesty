import type { ComponentPublicInstance } from 'vue'

export interface VProgressProps  {
  measure: string
  current: number
  total: number
}


export type VProgressComponent = ComponentPublicInstance<VProgressProps>
