import type { ComponentPublicInstance } from 'vue'

export interface VPaginationEvents {
  'update:limit'? : (value: number) => void
  'update:page'? : (value: number) => void
  onChange ? : (value: any) => void
}

export interface VPaginationProps extends VPaginationEvents {
  current_page: number
  from: number
  last_page?: number
  show_per_page?: boolean
  per_page: number
  to?: number
  total: number
  page: number
  limit: number
}

export type VPaginationComponent = ComponentPublicInstance<VPaginationProps>
