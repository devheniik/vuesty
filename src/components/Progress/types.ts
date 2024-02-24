import type { ComponentPublicInstance, VNode } from 'vue'

export interface VProgressProps {
  ready: number | string
  loaded?: number | string
  volume: number | string
  units?: string
  height?: number
  lost?: number | string
  price?: number | string
  showUnitsInPrice?: boolean
  noColor?: boolean
  readyLabel?: string
  lostLabel?: string
  volumeLabel?: string
  priceLabel?: string
  threeDecimals?: boolean
}

export interface VProgressSlots {
  ready: () => VNode[]
  price: () => VNode[]
  lost: () => VNode[]
  volume: () => VNode[]
}

export type VProgressComponent = ComponentPublicInstance<VProgressProps>
