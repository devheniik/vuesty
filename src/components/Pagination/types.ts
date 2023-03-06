import type { ComponentPublicInstance, Ref } from 'vue'

export interface VPaginationEvents {
  (e: 'paginationClick', page: Ref<number>, per_page: Ref<number>): () => void
  (e: 'update:modelValue', value: number): void
}

export interface VPaginationProps extends VPaginationEvents {
  total: number,
  current_page?: number,
  modelValue: number | string,
}

export type VPaginationComponent = ComponentPublicInstance<VPaginationProps>
