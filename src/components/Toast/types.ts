import type { ComponentPublicInstance } from 'vue'

export interface VToastEvents {
  (e: 'onClose'): () => void
  (e: 'onShown'): () => void
}

export interface VToastProps extends VToastEvents {
  variant?: 'primary' | 'success' | 'warning' | 'danger'
  text: string
}

export type VToastComponent = ComponentPublicInstance<VToastProps>
