import type { VNode, ComponentPublicInstance } from 'vue'

export type Colors = 'primary' | 'success' | 'warning' | 'danger'

export interface VAvatarEvents {
  closeClicked?: () => void
  okClicked?: () => void
  cancelClicked?: () => void
}


export interface VAvatarProps extends VAvatarEvents {
  variantColor?: Colors
  label: string
  okButton?: string
  cancelButton?: string
  controls?: boolean
}

export interface VAvatarSlots {
  default: () => VNode[]
}

export type VAvatarComponent = ComponentPublicInstance<VAvatarProps>
