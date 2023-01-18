import type { VNode, ComponentPublicInstance } from 'vue'
import type { Colors, Sizes } from '@/types/global/global'

export interface VBadgeEvents {
  onClose?: () => void
}

export interface VBadgeProps extends VBadgeEvents {
  size?: Sizes
  variantColor?: Colors
  status?: boolean
  label?: string
  icon?: boolean
  chip?: boolean
}

export interface VBadgeSlots {
  default: () => VNode[]
}

export type VBadgeComponent = ComponentPublicInstance<VBadgeProps>
