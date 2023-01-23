<script lang="ts" setup>
import { computed, onMounted, ref, nextTick } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { ChevronUpDownIcon, CheckIcon, MagnifyingGlassIcon, XMarkIcon, DocumentMagnifyingGlassIcon } from '@devheniik/icons'

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

const isMultipleFilled = () => {
  return props.multiple && (props.modelValue ? props.modelValue.length > 0 : false) && !isFocused.value
}

const isSingleFilled = () => {
  return props.multiple && (props.modelValue ? props.modelValue.length > 0 : false) && !isFocused.value
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
    return props.options.find((option: any) => option[props.valueKey] === value)[props.labelKey]
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

const filteredOptions = computed(() => {
  if (search.value === '' || search.value.length === 0) {
    return props.options
  }
  return props.options.filter(option => {
    return getLabel(option).toLowerCase().includes(search.value.toLowerCase())
  })
})

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
  <div ref="selectRef" class="v-select" @click="onFocus">
    <div
      ref="headRef"
      type="button"
      :aria-expanded="open"
      aria-haspopup="menu"
      :class="['v-select__head scrollbar group', { 'v-select__head_focus': isFocused }]">
      <span class="v-select__icon-box_left">
        <MagnifyingGlassIcon :class="[ 'v-select__icon', { 'v-select__icon_focus' : isFocused }]" />
      </span>
      <span class="v-select__head__main">
        <input
          v-show="isFocused"
          ref="inputRef"
          v-model="search"
          :placeholder="searchPlaceholder"
          type="text"
          class="v-select__main__input" />
        <div v-if="isMultipleFilled()" class="v-tag__box scrollbar">
          <slot v-for="(value, index) in modelValue" :key="index" name="tag" :option="value">
            <div class="v-tag">
              {{ getLabelByValue(value) }}
            </div>
          </slot>
        </div>
        <span v-else-if="isSingleFilled()" class="v-select__text">{{ label() }}</span>
        <span v-else-if="!isFocused" class="placeholder-text">{{ placeholder }}</span>
      </span>
      <div class="v-select__icon-box">
        <XMarkIcon :class="[ 'v-select__icon focus-none', { 'v-select__icon_focus' : isFocused }]" @click.stop="clear" @focus.stop="clear" />
        <ChevronUpDownIcon :class="[ 'v-select__icon focus-none', { 'v-select__icon_focus' : isFocused }]" />
      </div>
    </div>
    <transition
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <ul v-if="open" aria-labelledby="select-label" class="v-select__menu scrollbar" role="menu" tabindex="-1">
        <div v-if="props.multiple" class="v-select__empty-box">

        </div>
        <div v-if="filteredOptions.length === 0" class="v-select__empty-box">
          <DocumentMagnifyingGlassIcon class="v-select__icon_empty" />
          <span>
            {{emptyText}}
          </span>
        </div>
        <li
          v-for="(option, index) in filteredOptions"
          :key="index"
          class="v-select__menu__item group"
          role="option"
          @click="onSelect(option)"
          @keyup.enter="onSelect(option)">
          <span :class="[`v-select__menu__item__text`, { 'v-select__menu__item__text_selected': isSelected(option) }]">{{
            getLabel(option)
          }}</span>
          <span v-show="isSelected(option)" class="v-select__menu__item_selected__icon-box">
            <CheckIcon class="v-select__menu__item_selected__icon" />
          </span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/themes/main/components/select.scss";
</style>
