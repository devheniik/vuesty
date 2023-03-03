import type { ComponentPublicInstance } from 'vue'

export interface VPaginationEvents {
  (e: 'paginationClick', page: number): () => void
  (e: 'update:modelValue', value: number): void
}

export interface VPaginationProps extends VPaginationEvents {
  totalPages: number,
  currentPage?: number,
  modelValue: number | string,
}

export type VPaginationComponent = ComponentPublicInstance<VPaginationProps>
