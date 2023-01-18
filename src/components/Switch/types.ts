import type { ComponentPublicInstance, VNode } from 'vue'

export interface VSwitchEvents {
  (e: 'switch', page: boolean): () => void
}

export interface VSwitchSlots {
  default: () => VNode[]
}

export type VSwitchComponent = ComponentPublicInstance<VSwitchEvents>
