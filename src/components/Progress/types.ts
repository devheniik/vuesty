import type { ComponentPublicInstance } from 'vue'

// export interface VPhoneInputEvents {
//   'update:modelValue'? : (value: string) => void
// }

export interface VProgressProps {
  ready: number | string
  loaded?: number | string
  way?: number
  volume: number | string
  units?: string
  height?: number
  shipment?: boolean
  payment?: boolean
  full?: boolean
}

export type VProgressComponent = ComponentPublicInstance<VProgressProps>
