import type { ComponentPublicInstance } from 'vue'

export interface VPaginationEvents {
  (e: 'paginationClick', page: number): () => void
  (e: 'update:limit', value: number): void
}

export interface VPaginationProps extends VPaginationEvents {
  pagination: {
    total: number,
    last_page: number,
    per_page: number | string,
    current_page: number,
  },
  page: number,
  limit: number | string
}

export type VPaginationComponent = ComponentPublicInstance<VPaginationProps>
