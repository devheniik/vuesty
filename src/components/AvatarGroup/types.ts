import type { ComponentPublicInstance, VNode } from 'vue'
import type { Sizes, Colors } from '@/types/global/global';


export interface VAvatarGroupProps {
  size?: Sizes
  color?: Colors
  text?: string
}

export interface VAvatarGroupSlots {
  default: () => VNode[]
}

export type VAvatarGroupComponent = ComponentPublicInstance<VAvatarGroupProps>
