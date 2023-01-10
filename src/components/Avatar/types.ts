import type { ComponentPublicInstance } from 'vue'
import type { Sizes, Colors } from '@/types/global/global';

export type MainColors =
  | 'primary'
  | 'warning'
  | 'success'
  | 'danger'

export interface VAvatarEvents {
  onClick?: () => void
}

export interface VAvatarProps extends VAvatarEvents {
  size?: Sizes
  color?: Colors
  src?: string
  alt?: string
  width?: number
  height?: number
  text?: string
}

export type VAvatarComponent = ComponentPublicInstance<VAvatarProps>
