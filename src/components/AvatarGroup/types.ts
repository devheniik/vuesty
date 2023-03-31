import type { ComponentPublicInstance, VNode } from 'vue'
type Sizes = 'tiny' | 'small' | 'medium' | 'big' | 'large' | 'huge' | 'gigantic'

export interface VAvatarGroupProps {
  size?: Sizes
  text?: string
}

export interface VAvatarGroupSlots {
  default: () => VNode[]
}

export type VAvatarGroupComponent = ComponentPublicInstance<VAvatarGroupProps>
