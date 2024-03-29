import type { VNode, ComponentPublicInstance } from 'vue'

export interface VButtonEvents {
  onClick?: () => void
}

export interface VButtonProps extends VButtonEvents {
  disabled?: boolean
  size?: 'small' | 'medium' | 'big'
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
  href?: string
  tag?: string
  to?: string | Record<string, any>
  target?: '_self' | '_blank' | '_parent' | '_top'
  loading?: boolean
  awaitTime?: number
}

export interface VButtonSlots {
  default: () => VNode[]
  loadingSlot: () => VNode[]
  'icon-left': () => VNode[]
  'icon-right': () => VNode[]
  icon: () => VNode[]
}

export type VButtonComponent = ComponentPublicInstance<VButtonProps>
