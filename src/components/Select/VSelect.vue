<script setup lang="ts">
import { computed, onMounted, ref, nextTick } from 'vue'
import { onClickOutside } from '@vueuse/core'
import {
  ChevronUpDownIcon,
  CheckIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  DocumentMagnifyingGlassIcon,
  PlusIcon,
} from '@devheniik/icons'

const props = withDefaults(
  defineProps<{
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
  }>(),
  {
    openDefault: false,
    multiple: false,
    labelKey: 'label',
    valueKey: 'value',
    searchable: false,
    deselect: false,
    placeholder: 'Select',
    searchPlaceholder: 'Search',
    emptyText: 'No results found',
    maxShow: 2,
  }
)

// * Emits

interface Emits {
  (e: 'focus'): void

  (e: 'update:modelValue', value: any): void

  (e: 'select'): void

  (e: 'click'): void

  (e: 'openPanel'): void

  (e: 'closePanel'): void

  (e: 'clear'): void
}

// const value = ref(props.modelValue)

const emit = defineEmits<Emits>()

// Select
const selectRef = ref()
const search = ref<string>('')

const label = () => {
  if (!isOptionObject()) {
    return String(props.modelValue)
  }

  return false
}

const headRef = ref()
const inputRef = ref()

const isFocused = ref(false)

onClickOutside(selectRef, () => {
  if (open.value) {
    outFocus()
  }
})

const isMultipleFilledWithoutFocus = () => {
  return (
    props.multiple &&
    (props.modelValue ? props.modelValue.length > 0 : false) &&
    !isFocused.value
  )
}

const isMultipleFilled = () => {
  return (
    props.multiple && (props.modelValue ? props.modelValue.length > 0 : false)
  )
}

const isSingleFilledWithoutFocus = () => {
  return (
    props.multiple &&
    (props.modelValue ? props.modelValue.length > 0 : false) &&
    !isFocused.value
  )
}

const isOptionObject = () => {
  if (props.options) {
    if (props.options.length > 0) {
      return typeof props.options[0] === 'object'
    }
  }

  return false
}

// Created

const getLabel = (option: any) => {
  if (isOptionObject()) {
    return option[props.labelKey]
  }

  return option
}

const getLabelByValue = (value: any) => {
  if (isOptionObject()) {
    return props.options.find(
      (option: any) => option[props.valueKey] === value
    )[props.labelKey]
  }

  return value
}

const isSelected = (option: any) => {
  if (props.multiple) {
    return props.modelValue.includes(getValue(option))
  }

  return getValue(option) === props.modelValue
}

const getValue = (option: any) => {
  if (isOptionObject()) {
    return option[props.valueKey]
  }

  return option
}

const clear = () => {
  if (isOptionObject()) {
    emit('update:modelValue', [])
  } else {
    emit('update:modelValue', null)
  }

  emit('clear')
}

const onSelect = (option: any) => {
  if (props.multiple) {
    if (props.modelValue.length || props.multiple) {
      if (isSelected(option)) {
        emit(
          'update:modelValue',
          props.modelValue.filter((item: any) => item !== getValue(option))
        )
      } else {
        emit('update:modelValue', [...props.modelValue, getValue(option)])
      }
    } else {
      emit('update:modelValue', [getValue(option)])
    }
  } else {
    emit('update:modelValue', getValue(option))
  }

  if (!props.multiple) {
    closePanel()
  } else {
    openPanel()
  }

  emit('select')
  console.log('Select')
}

const deselectItem = (value: any) => {
  console.log(value)
  if (!props.deselect) {
    emit(
      'update:modelValue',
      props.modelValue.filter((item: any) => item !== value)
    )
  }
}

const filteredOptions = computed(() => {
  let response = []

  if (search.value === '' || search.value.length === 0) {
    response = props.options
  }
  response = props.options.filter(option => {
    return getLabel(option).toLowerCase().includes(search.value.toLowerCase())
  })

  return response
})

const visibleTags = computed(() => {
  let response = []

  if (props.modelValue) {
    if (props.modelValue.length > props.maxShow) {
      response = props.modelValue.slice(0, props.maxShow)
    } else {
      response = props.modelValue
    }
  }

  return response
})

const excessQuantity = () => {
  if (props.modelValue) {
    if (props.modelValue.length > props.maxShow) {
      return props.modelValue.length - props.maxShow
    }
  }

  return 0
}

// * Panel functions

const open = ref(props.openDefault)

const openPanel = () => {
  open.value = true
  emit('openPanel')
}

const closePanel = () => {
  open.value = false
  emit('closePanel')
}

// * Emits functions

// Focus emits

const onFocus = () => {
  openPanel()
  visibleFocus()
  emit('focus')
}

const outFocus = () => {
  closePanel()
  hideFocus()
  emit('focus')
}

const visibleFocus = () => {
  isFocused.value = true
  nextTick(() => {
    inputRef.value.focus()
  })
}

const hideFocus = () => {
  isFocused.value = false
}

// Element

onMounted(() => {
  if (isOptionObject()) {
    if (props.modelValue === null || props.modelValue === undefined) {
      emit('update:modelValue', [])
    } else if (String(typeof props.modelValue) !== 'array') {
      if (props.modelValue.length === 0) {
        emit('update:modelValue', [])
      }
    }
  }
})



</script>

<template>
  <div ref="selectRef" class="select" @click="onFocus">
    <div
      ref="headRef"
      type="button"
      :aria-expanded="open"
      aria-haspopup="menu"
      :class="[
        'select-head scrollbar group',
        { 'select-head-focus': isFocused },
      ]">
      <span class="select-icon-box-left">
        <MagnifyingGlassIcon
          :class="['select-icon', { 'select-icon-focus': isFocused }]" />
      </span>
      <span class="select-head-main">
        <input
          v-show="isFocused"
          ref="inputRef"
          v-model="search"
          :placeholder="searchPlaceholder"
          type="text"
          class="select-main-input" />
        <div v-if="isMultipleFilledWithoutFocus()" class="tag-box scrollbar">
          <slot
            v-for="(value, index) in visibleTags"
            :key="index"
            name="tag"
            :option="value">
            <div class="tag">
              {{ getLabelByValue(value) }}
            </div>
          </slot>
          <template v-if="excessQuantity()">
            <slot name="excess" :quantity="excessQuantity()">
              <div class="tag">+ {{ excessQuantity() }}</div>
            </slot>
          </template>
        </div>
        <span v-else-if="isSingleFilledWithoutFocus()" class="select-text">
          {{ label() }}
        </span>
        <span v-else-if="!isFocused" class="placeholder-text">
          {{ placeholder }}
          </span>
      </span>
      <div class="select-icon-box">
        <XMarkIcon
          :class="[
            'select-icon focus-none',
            { 'select-icon-focus': isFocused },
          ]"
          @click.stop="clear"
          @focus.stop="clear" />
        <ChevronUpDownIcon
          :class="[
            'select-icon focus-none',
            { 'select-icon-focus': isFocused },
          ]" />
      </div>
    </div>
    <transition
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <ul
        v-if="open"
        aria-labelledby="select-label"
        class="select-menu scrollbar"
        role="menu"
        tabindex="-1">
        <div v-if="isMultipleFilled()" class="select-tag-block-box">
          <slot
            v-for="(value, index) in modelValue"
            :key="index"
            name="tag"
            :option="value"
            class="group"
            :deselect-item="deselectItem"
            @click.stop="deselectItem(value)">
            <div class="tag-block">
              {{ getLabelByValue(value) }}
              <XMarkIcon
                :class="['select-tag-deselect-icon focus-none']"
                @click.stop="deselectItem(value)" />
            </div>
          </slot>
          <div class="select-empty-box-border"></div>
        </div>
        <div v-if="!filteredOptions.length" class="select-empty-box">
          <DocumentMagnifyingGlassIcon class="select-icon-empty" />
          <span>
            {{ emptyText }}
          </span>
        </div>
        <li
          v-for="(option, index) in filteredOptions"
          :key="index"
          class="select-menu-item group"
          role="option"
          @click="onSelect(option)"
          @keyup.enter="onSelect(option)">
          <slot
            name="option"
            :option="option"
            :is-selected="isSelected(option)"
            :label="getLabel(option)">
            <span
              :class="[
                `select-menu-item-text`,
                { 'select-menu-item-text-selected': isSelected(option) },
              ]"
            >{{ getLabel(option) }}</span
            >
            <span
              v-show="isSelected(option)"
              class="select-menu-item-selected-icon-box">
              <CheckIcon class="select-menu-item-selected-icon" />
            </span>
          </slot>
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
@import '../../assets/themes/main/components/select.scss';
</style>
