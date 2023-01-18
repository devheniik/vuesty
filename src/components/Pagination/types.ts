import type { ComponentPublicInstance, Ref } from 'vue'

export interface VPaginationEvents {
  (e: 'onPaginationClick', page: Ref<number>): () => void
}

export interface VPaginationProps extends VPaginationEvents {
  totalPages: number
}

export type VPaginationComponent = ComponentPublicInstance<VPaginationProps>
