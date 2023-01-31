import type { VNode, ComponentPublicInstance } from 'vue'

export interface VBadgeEvents {
  onClose?: () => void
}

export interface VBadgeProps extends VBadgeEvents {
  color?:
    | 'primary'
    | 'secondary'
    | 'light'
    | 'success'
    | 'warning'
    | 'danger'
    | 'upgrade'
    | 'tertiary'
    | 'info'
    | 'neutral'
  status?: boolean
  label?: string
  icon?: boolean
  chip?: boolean
}

export interface VBadgeSlots {
  default: () => VNode[]
}

export type VBadgeComponent = ComponentPublicInstance<VBadgeProps>
