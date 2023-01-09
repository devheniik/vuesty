import type {  ComponentPublicInstance } from 'vue';

export interface VAvatarEvents {
  onClick?: () => void;
}

export interface VAvatarProps extends VAvatarEvents {
  size?: 'tiny' | 'small' | 'medium' | 'large', // !TODO pass sizes and add default size !(Now your default type is 'small' it bad)
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light'  // !TODO pass colors
  src?: string,
  alt?: string,
  width?: number,
  height?: number,
  text?: string,
}

export type VAvatarComponent = ComponentPublicInstance<VAvatarProps>
