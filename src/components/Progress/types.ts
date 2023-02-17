import type { ComponentPublicInstance } from 'vue'

export interface VProgressProps  {
  // measure: string
  // current: number
  // total: number
  ready: number,
  loaded: number,
  way?: number,
  volume: number,
  units: string,
  height?: number,
  small?: boolean,
  shipment?: boolean,
  full?: boolean,
}


export type VProgressComponent = ComponentPublicInstance<VProgressProps>
