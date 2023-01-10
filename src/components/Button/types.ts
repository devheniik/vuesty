import type { VNode, ComponentPublicInstance } from 'vue'

export interface VButtonEvents {
  onClick?: () => void
}

export interface VButtonProps extends VButtonEvents {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' // !TODO pass variants
  disabled?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large' // !TODO pass sizes and add default size !(Now your default type is 'small' it bad)
  variantColor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' // !TODO pass colors
  colorBold?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
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
