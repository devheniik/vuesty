import type { ComponentPublicInstance, VNode } from 'vue'

export interface VNotificationEvents {
  showNotifications?: () => void
}

export interface VNotificationProps extends VNotificationEvents {
  count?: number
}

export interface VNotificationSlots {
  default: () => VNode[]
}

export type VNotificationComponent = ComponentPublicInstance<VNotificationProps>
