import type { ComponentPublicInstance, VNode } from 'vue'

export interface VNotificationProps {
  count?: number
}

export interface VNotificationSlots {
  default: () => VNode[]
}

export type VNotificationComponent = ComponentPublicInstance<VNotificationProps>
