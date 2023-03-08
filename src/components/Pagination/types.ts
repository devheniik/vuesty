import type { ComponentPublicInstance } from 'vue'

export interface VPaginationEvents {
  (e?: 'update:limit', value?: number): void
  (e?: 'update:page', value?: number): void
  (e?: 'change', value?: any): void
}

export interface VPaginationProps extends VPaginationEvents {
  current_page?: number
  from?: number
  last_page?: any
  per_page?: number
  to: any
  total: number
  page: number
  limit: number
}

export type VPaginationComponent = ComponentPublicInstance<VPaginationProps>
