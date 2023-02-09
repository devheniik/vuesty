import type { ComponentPublicInstance } from 'vue'

export type MainColors = 'primary' | 'warning' | 'success' | 'danger'

export interface VAvatarEvents {
  onClick?: () => void
}

export interface VAvatarProps extends VAvatarEvents {
  size?:
    | 'tiny'
    | 'small'
    | 'medium'
    | 'big'
    | 'large'
    | 'huge'
    | 'gigantic'
  color?:
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
  src?: string
  alt?: string
  width?: number
  height?: number
  text?: string
}

export type VAvatarComponent = ComponentPublicInstance<VAvatarProps>
