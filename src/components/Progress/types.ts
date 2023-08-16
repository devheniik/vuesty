import type { ComponentPublicInstance } from 'vue'

export interface VProgressProps {
  ready: number | string
  loaded?: number | string
  volume: number | string
  units?: string
  height?: number
  lost?: number | string
  price?: number | string
  showUnitsInPrice?: boolean
}

export type VProgressComponent = ComponentPublicInstance<VProgressProps>
