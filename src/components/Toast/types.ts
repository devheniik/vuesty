import type { ComponentPublicInstance } from 'vue'

export interface VToastEvents {
  (e: 'close'): () => void
}

export interface VToastProps extends VToastEvents {
  variant?: 'primary' | 'success' | 'warning' | 'danger'
  text: string
}

export type VToastComponent = ComponentPublicInstance<VToastProps>