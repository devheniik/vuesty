import type { VNode, ComponentPublicInstance } from 'vue'

export interface VTabsEvents {
  onClick?: () => void
}

export interface VTabs {
  name: string
  badge: string
}

export interface VTabsProps extends VTabsEvents {
  tabs: VTabs[]
}

export interface VTabsSlots {
  panels: () => VNode[]
}

export type VTabsComponent = ComponentPublicInstance<VTabsProps>
