import type { VNode, ComponentPublicInstance } from 'vue'

export interface VButtonEvents {
  onClick?: () => void
}

type Sizes = 'small' | 'big'
type ColorVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light'

export interface VButtonProps extends VButtonEvents {
  disabled?: boolean
  size?: Sizes
  variantColor?: ColorVariants
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
