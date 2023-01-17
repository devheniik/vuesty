import type { VNode, ComponentPublicInstance } from 'vue'

export interface VAccordionProps {
  bg?: boolean
}

export interface VAccordionSlots {
  default: () => VNode[]
}

export type VAccordionComponent = ComponentPublicInstance<VAccordionProps>
