import type { VNode, ComponentPublicInstance } from 'vue'

export interface VAvatarEvents {
  close?: () => void
  accept?: () => void
  cancel?: () => void
}

export interface VAvatarProps extends VAvatarEvents {
  variant?: 'primary' | 'success' | 'warning' | 'danger'
  label?: string
  acceptButton?: string
  cancelButton?: string
  controls?: boolean
}

export interface VAvatarSlots {
  default: () => VNode[]
  icon: () => VNode[]
}

export type VAvatarComponent = ComponentPublicInstance<VAvatarProps>
