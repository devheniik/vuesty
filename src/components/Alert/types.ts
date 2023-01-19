import type { VNode, ComponentPublicInstance } from 'vue'

export interface VAvatarEvents {
  onCloseClicked?: () => void
  okClicked?: () => void
  cancelClicked?: () => void
}

export interface VAvatarProps extends VAvatarEvents {
  color?: 'primary' | 'success' | 'warning' | 'danger'
  label: string
  acceptButton?: string
  cancelButton?: string
  controls?: boolean
}

export interface VAvatarSlots {
  default: () => VNode[]
  icon: () => VNode[]
}

export type VAvatarComponent = ComponentPublicInstance<VAvatarProps>
