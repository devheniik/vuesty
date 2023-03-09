import type { ComponentPublicInstance } from 'vue'

export interface VUTableProps {
  rows: string[] | object[] | number[]
  headers: string[],
  cols?: string[] | object[] | number[] | null
  editAction?: boolean,
  menuOptions: string[] | string,
}

export type VUTableComponent = ComponentPublicInstance<VUTableProps>
