import type { ComponentPublicInstance, VNode } from 'vue'

export interface VTooltipProps {
  placement: 'top' | 'bottom' | 'left' | 'right'
  small?: boolean
}

export interface VSwitchSlots {
  default: () => VNode[]
}

export type VRadioButtonComponent = ComponentPublicInstance<VTooltipProps>
