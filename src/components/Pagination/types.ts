import type { ComponentPublicInstance, Ref } from 'vue'

export interface VPaginationEvents {
  (e: 'paginationClick', page: Ref<number>, per_page: Ref<number>): () => void
}

export interface VPaginationProps extends VPaginationEvents {
  totalPages: number,
  currentPage?: number,
  perPage?: number | string,
  modelValue: number | string,
}

export type VPaginationComponent = ComponentPublicInstance<VPaginationProps>
