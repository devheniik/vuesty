import type { ComponentPublicInstance } from 'vue'

// export interface VPhoneInputEvents {
//   'update:modelValue'? : (value: string) => void
// }

export interface VProgressProps {
  ready: number
  loaded: number
  way?: number
  volume: number
  units: string
  height?: number
  shipment?: boolean
  full?: boolean
}

export type VProgressComponent = ComponentPublicInstance<VProgressProps>
