import type { VNode, ComponentPublicInstance } from 'vue'

export interface VSelectEvents {
  onClick?: () => void
  onFocus?: () => void
  onSelect?: () => void
  onClear?: () => void
  onOpenPanel?: () => void
  onClosePanel?: () => void
  ['onUpdate:modelValue']: (value: any) => void
}

export interface VSelectProps extends VSelectEvents {
  modelValue: any
  openDefault?: boolean
  multiple?: boolean
  options: any[]
  labelKey?: string
  valueKey?: string
  searchable?: boolean
  placeholder?: string
  deselect?: boolean
  searchPlaceholder?: string
  emptyText?: string
  maxShow?: number
}

export interface VSelectSlots {
  tag: () => VNode[]
  excess: () => VNode[]
  option: () => VNode[]
}

export type VSelectComponent = ComponentPublicInstance<VSelectProps>
