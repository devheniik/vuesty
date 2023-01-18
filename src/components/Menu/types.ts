import type { VNode, ComponentPublicInstance } from 'vue'

export interface VMenuSlots {
  default: () => VNode[]
  menuItems: () => VNode[]
}

export type VMenuComponent = ComponentPublicInstance<{}>
