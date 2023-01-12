<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { ChevronUpDownIcon, CheckIcon, MagnifyingGlassIcon, XMarkIcon } from '@devheniik/icons'


const props = withDefaults(
  defineProps<{
    modelValue: any
    openDefault?: boolean
    multiple?: boolean
    options: any[]
    labelKey?: string
    valueKey?: string
    searchable?: boolean,
    placeholder?: string,
    deselect?: boolean,
  }>(),
  {
    openDefault: false,
    multiple: false,
    labelKey: 'label',
    valueKey: 'value',
    searchable: false,
    deselect: false,
    placeholder: 'Select'
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

const isOptionObject = () => {
  if (props.options.length > 0) {
    return typeof props.options[0] === 'object'
  }
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
  if (isOptionObject()){
    emit('update:modelValue', [])
  } else {
    emit('update:modelValue', null)
  }

  emit('clear')
}

const onSelect = (option: any) => {
    if (props.multiple){
      if (props.modelValue.length || props.multiple){
        if (isSelected(option)){
          emit('update:modelValue', props.modelValue.filter((item: any) => item !== getValue(option)))
        } else {
          emit('update:modelValue', [ ...props.modelValue, getValue(option)])
        }
      } else {
        emit('update:modelValue', [getValue(option)])
      }
    } else {
      emit('update:modelValue', getValue(option))
    }


    if (!props.multiple){
      closePanel()
    }

  emit('select')
  console.log('Select')
}


const filteredOptions = computed(() => {
  return props.options
  // console.log(inputRef)
  // return props.options.filter((option) => {
  //   return getLabel(option).toLowerCase().includes(inputRef.value.toLowerCase())
  // })
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
}

const hideFocus = () => {
  isFocused.value = false
}

// Element

const selectRef = ref()

const label = () => {
  if (!isOptionObject()){
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

onMounted(() => {
  if(isOptionObject()){
    if(props.modelValue === null || props.modelValue === undefined) {
      emit('update:modelValue', [])
    } else if (String(typeof  props.modelValue) !== 'array'){
      if (props.modelValue.length === 0){
        emit('update:modelValue', [])
      }
    }
  }
})
</script>

<template>
  <div ref="selectRef" class="select">
    <button ref="headRef" type="button" :aria-expanded="open" aria-haspopup="menu" :class="['select-head group', { 'select-head-focus': isFocused  }]" @focus="onFocus" @focusout='outFocus'>
      <div class="select-head-start">
        <span  class="select-icon-box-left">
          <MagnifyingGlassIcon class="select-icon" />
        </span>
        <span class="select-head-main">
          <div v-if="multiple && modelValue.length" class="tag-box">
            <slot v-for="(value, index) in modelValue" :key="index" name="tag" :option="value">
              <div class="tag">
                {{ getLabelByValue(value) }}
              </div>
            </slot>
          </div>
          <template v-else-if="true">
            <input v-if="false" ref="inputRef" :placeholder="placeholder" type="text" class="select-main-input" value="Text" @focus="onFocus" />
            <span v-else-if="label()" class="select-text">{{ label() }}</span>
          </template>
          <span v-else class="placeholder-text">{{ placeholder }}</span>
        </span>
      </div>
      <div class="select-icon-box">
        <XMarkIcon class="select-icon focus-none" @click.stop="clear" @focus.stop="clear" />
        <ChevronUpDownIcon class="select-icon focus-none" />
      </div>
    </button>
    <transition
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <ul v-if="open" aria-labelledby="select-label" class="select-menu scrollbar" role="menu" tabindex="-1">
        <li
          v-for="(option, index) in filteredOptions"
          :key="index"
          class="select-menu-item group"
          role="option"
          @click="onSelect(option)"
          @keyup.enter="onSelect(option)">
          <span :class="[`select-menu-item-text`, { 'select-menu-item-text-selected': isSelected(option) }]">{{
            getLabel(option)
          }}</span>
          <span v-show="isSelected(option)" class="select-menu-item-selected-icon-box">
            <CheckIcon class="select-menu-item-selected-icon" />
          </span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped></style>
