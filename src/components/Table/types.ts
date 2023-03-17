import type { ComponentPublicInstance } from 'vue'

export interface VTableEvents {
  onEdit?: (value: any) => void
  onDelete?: (value: any) => void
}

export interface VTableProps extends VTableEvents {
  rows: string[] | object[] | number[]
  cols: string[] | object[] | number[] | null
  headers: string[]
  deleteAction: boolean
  editAction: boolean
}

export type VTableComponent = ComponentPublicInstance<VTableProps>
