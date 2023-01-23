import type { VNode, ComponentPublicInstance } from 'vue'

export interface VAccordionEvents {
  ['onUpdate:modelValue']?: () => void
}

export interface VAccordionProps extends VAccordionEvents {
  bg?: boolean
  modelValue?: boolean
  label?: string
  border?: boolean
}

export interface VAccordionSlots {
  default: () => VNode[]
  header: () => VNode[]
}

export type VAccordionComponent = ComponentPublicInstance<VAccordionProps>
