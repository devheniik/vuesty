import type { ComponentPublicInstance } from 'vue'

export interface VUTableProps {
  rows: string[] | object[] | number[]
  headers: string[],
  cols?: string[] | object[] | number[] | null,
  trCount?: number
}

export type VUTableComponent = ComponentPublicInstance<VUTableProps>
