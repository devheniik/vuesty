import type { ComponentPublicInstance, VNode } from 'vue'

type Colors =
  | 'primary'
  | 'secondary'
  | 'light'
  | 'success'
  | 'warning'
  | 'danger'
  | 'upgrade'
  | 'tertiary'
  | 'info'
  | 'neutral'

type Sizes =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'big'
  | 'large'
  | 'huge'
  | 'gigantic'

export interface VAvatarGroupProps {
  size?: Sizes
  color?: Colors
  text?: string
}

export interface VAvatarGroupSlots {
  default: () => VNode[]
}

export type VAvatarGroupComponent = ComponentPublicInstance<VAvatarGroupProps>
