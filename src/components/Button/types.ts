import type { VNode, ComponentPublicInstance } from 'vue'

export interface VButtonEvents {
  onClick?: () => void
}

export interface VButtonProps extends VButtonEvents {
  disabled?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'big' | 'large' | 'huge' | 'gigantic'
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
}

export interface VButtonSlots {
  default: () => VNode[]
  loadingSlot: () => VNode[]
}

export type VButtonComponent = ComponentPublicInstance<VButtonProps>
