import type { ComponentPublicInstance } from 'vue'

export interface VToasterEvents {
  (e: 'close'): () => void
}

export interface VToasterProps extends VToasterEvents {
  variant?: 'primary' | 'success' | 'warning' | 'danger'
  text: string
}

export type VToasterComponent = ComponentPublicInstance<VToasterProps>
