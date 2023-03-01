import type { ComponentPublicInstance, Ref } from 'vue'

export interface VPaginationEvents {
  (e: 'paginationClick', page: Ref<number>): () => void
}

export interface VPaginationProps extends VPaginationEvents {
  totalPages: number,
  currentPage?: number,
}

export type VPaginationComponent = ComponentPublicInstance<VPaginationProps>
