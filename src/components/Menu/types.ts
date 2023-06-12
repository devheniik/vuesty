import type { VNode, ComponentPublicInstance } from 'vue'

export interface VMenuSlots {
  default: () => VNode[]
  menuItems: () => VNode[]
}

export interface VMenuProps {
  icons?: string
  notRelative?: boolean
}

export type VMenuComponent = ComponentPublicInstance<VMenuProps>
