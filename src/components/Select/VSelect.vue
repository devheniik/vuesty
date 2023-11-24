<script setup lang="ts">
import { computed, onMounted, ref, nextTick } from 'vue'
import { onClickOutside } from '@vueuse/core'
import {
  ChevronDownIcon,
  CheckIcon,
  SearchMagnifyingGlassIcon,
  CloseMdIcon,
  FileRemoveIcon
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
    autoFilter?: boolean
    search?: string
    isLoading?: boolean
    delay?: number
    searchIcon?: boolean
    disabled?: boolean
    invalid?: boolean
  }>(),
  {
    openDefault: false,
    multiple: false,
    labelKey: 'label',
    valueKey: 'value',
    search: '',
    searchable: false,
    deselect: false,
    placeholder: 'Пошук',
    searchPlaceholder: 'Пошук',
    emptyText: 'Не знайдено',
    maxShow: 2,
    autoFilter: true,
    isLoading: false,
    delay: 1000,
    searchIcon: false,
    disabled: false,
    invalid: false
  }
)

// * Emits

interface Emits {
  (e: 'focus'): void

  (e?: 'update:modelValue', value?: any): void

  (e: 'select'): void

  (e: 'click'): void

  (e: 'openPanel'): void

  (e: 'closePanel'): void

  (e: 'clear'): void
  (e: 'search', value: string): void
}

// const value = ref(props.modelValue)

const emit = defineEmits<Emits>()

// Select
const selectRef = ref()
const lastUpdatedSearch = ref<string>('')
const search = ref<string>(props.search)
const canUpdateSearch = ref<boolean>(true)

const singleLabel = () => {
  if (isOptionObject()) {
    return getLabelByValue(props.modelValue)
  }

  return props.modelValue
}

const headRef = ref()
const inputRef = ref()

const isFocused = ref(false)

const handleSearch = (e: any) => {
  search.value = e.target.value
  if (canUpdateSearch.value) {
    emit('search', search.value)
    canUpdateSearch.value = false
    changeCanUpdateSearch()
  }

}

const changeCanUpdateSearch = () => {
  if (!canUpdateSearch.value) {
    setTimeout(() => {
      canUpdateSearch.value = true
      if (search.value !== lastUpdatedSearch.value) {
        lastUpdatedSearch.value = search.value
        emit('search', search.value)
      }
    }, props.delay)
  }
}

onClickOutside(selectRef, () => {
  if (open.value) {
    outFocus()
  }
})

const isMultipleFilledWithoutFocus = () => {
  return props.multiple && (props.modelValue ? props.modelValue.length > 0 : false) && !isFocused.value
}

const isMultipleFilled = () => {
  return props.multiple && (props.modelValue ? props.modelValue.length > 0 : false)
}

const isSingleFilledWithoutFocus = () => {
  return !props.multiple && !isFocused.value && (props.modelValue !== undefined && props.modelValue !== null && props.modelValue !== "");
}

const isOptionObject = () => {
  if (props.options) {
    if (props.options?.length > 0) {
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

const isLabelsReady = computed(() => {
  if (isOptionObject()) {
    if (props.multiple) {
      return props.modelValue.every((value: any) => getLabelByValue(value) !== undefined);
    } else {
      return getLabelByValue(props.modelValue) !== undefined;
    }
  }

  return true;
});


const getLabelByValue = (value: any) => {
  if (isOptionObject()) {
    const option = props.options.find((option: any) => option[props.valueKey] === value)
    if (option) {
      return option[props.labelKey]
    }
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
  if (props.multiple) {
    emit('update:modelValue', [])
  } else {
    emit('update:modelValue', null)
  }

  emit('clear')
}

const onSelect = (option: any) => {
  if (props.multiple) {
    if (props.modelValue?.length || props.multiple) {
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
    outFocus()
  } else {
    openPanel()
  }

  emit('select')
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

  if (search.value === '' || search.value?.length === 0) {
    return props.options
  }

  if (props.autoFilter) {
    return props.options.filter(option => {
      return getLabel(option).toLowerCase().includes(search.value.toLowerCase())
    })
  }

  return props.options
})

const visibleTags = computed(() => {
  let response = []

  if (props.modelValue) {
    if (props.modelValue?.length > props.maxShow) {
      response = props.modelValue.slice(0, props.maxShow)
    } else {
      response = props.modelValue
    }
  }

  return response
})

const excessQuantity = () => {
  if (props.modelValue) {
    if (props.modelValue?.length > props.maxShow) {
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
  if(props.disabled) {
    return
  }
  openPanel()
  visibleFocus()
  emit('focus')
}

const outFocus = () => {
  closePanel()
  hideFocus()
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
  if (props.multiple) {
    if (props.modelValue === null || props.modelValue === undefined) {
      emit('update:modelValue', [])
    } else if (String(typeof props.modelValue) !== 'array') {
      if (props.modelValue?.length === 0) {
        emit('update:modelValue', [])
      }
    }
  }
})
</script>

<template>
  <div v-if="isLabelsReady" ref="selectRef" class="v-select" @focus.stop>
    <div
      ref="headRef"
      type="button"
      :aria-expanded="open"
      aria-haspopup="menu"
      :class="['v-select__head scrollbar group',
      { 'v-select__head_focus': isFocused && !invalid },
      { 'v-select__head_disabled': disabled },
      {'v-select__main__input_error': invalid}
      ]"
      @click="onFocus">
      <span v-if="searchIcon" class="v-select__icon-box_left">
        <SearchMagnifyingGlassIcon :class="[ 'v-select__icon', { 'v-select__icon_focus' : isFocused }]" />
      </span>
        <input
          v-show="isFocused"
          ref="inputRef"
          :value="search"
          :placeholder="searchPlaceholder"
          type="text"
          class="v-select__main__input"
          :disabled="disabled"
          @focus.stop
          @input="handleSearch($event)" />
        <div v-if="isMultipleFilledWithoutFocus()" class="v-tag__box scrollbar">
          <slot v-for="(value, index) in visibleTags" :key="index" name="tag" :option="value">
            <div class="v-tag">
              {{ getLabelByValue(value) }}
            </div>
          </slot>
          <template v-if="excessQuantity()">
            <slot name="excess" :quantity="excessQuantity()">
              <div class="v-tag">+ {{ excessQuantity() }}</div>
            </slot>
          </template>
        </div>
        <span v-else-if="isSingleFilledWithoutFocus()" class="v-select__text">
          {{ singleLabel() }}
        </span>
        <span v-else-if="!isFocused" class="v-select__placeholder-text">
          {{ placeholder }}
        </span>
      <div v-if="isLoading" class="v-select__icon-box">
        <svg class="v-select__icon-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
      <div v-else class="v-select__icon-box">
        <CloseMdIcon
          v-if="modelValue && deselect"
          :class="[ 'v-select__icon focus-none', { 'v-select__icon_focus' : isFocused }]"
          @click.stop="clear"
          @focus.stop="clear" />
        <ChevronDownIcon :class="[ 'v-select__icon focus-none', { 'v-select__icon_focus' : isFocused }]" />
      </div>
    </div>
    <transition
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">

      <ul v-if="open && !isLoading" aria-labelledby="select-label" class="v-select__menu scrollbar" role="menu" tabindex="-1">
        <div v-if="isMultipleFilled()" class="v-select__empty-box">
          <slot
            v-for="(value, index) in modelValue"
            :key="index"
            name="tag"
            :option="value"
            class="group"
            :deselect-item="deselectItem"
            @click.stop="deselectItem(value)">
            <div class="v-tag-in-selected-box">
              {{ getLabelByValue(value) }}
              <CloseMdIcon  :class="['v-select__icon-deselect focus-none']" @click.stop="deselectItem(value)" />
            </div>
          </slot>
        </div>
        <div v-if="!filteredOptions?.length" class="v-select__empty-box">
          <FileRemoveIcon class="v-select__icon_empty" />
          <span>
            {{ emptyText }}
          </span>
        </div>
        <li
          v-for="(option, index) in filteredOptions"
          :key="index"
          :class="[multiple ? 'v-select__menu__item' : 'v-select__menu__item_solo', 'group']"
          role="option"
          @click="onSelect(option)"
          @keyup.enter="onSelect(option)">
          <slot name="option" :option="option" :is-selected="isSelected(option)" :label="getLabel(option)">
            <span :class="[`v-select__menu__item__text`, { 'v-select__menu__item__text_selected': isSelected(option) }]">{{
                getLabel(option)
              }}</span>
            <span v-if="multiple" v-show="isSelected(option)" class="v-select__menu__item_selected__icon-box">
              <CheckIcon class="v-select__menu__item_selected__icon" />
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
