import type { ComponentPublicInstance, VNode } from 'vue'

export interface VTooltipProps {
  placement: 'top' | 'bottom' | 'left' | 'right'
}

export interface VSwitchSlots {
  default: () => VNode[]
}

export type VRadioButtonComponent = ComponentPublicInstance<VTooltipProps>
