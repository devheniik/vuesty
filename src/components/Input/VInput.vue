<script setup lang="ts">
import { ref, useSlots } from 'vue'


const props = withDefaults(
  defineProps<{
    modelValue: string
    _valid?: boolean
    _invalid?: boolean
    disabled?: boolean
    readonly?: boolean
    placeholder?: string | false
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
    rules?: 'any' | 'stringNumbers' | 'string' | 'numbers' | 'integer' | 'volume' | 'currency' | RegExp
    clearable?: boolean
    name?: string
    applyColorToLeftIcon?: boolean
    applyColorToRightIcon?: boolean
    min?: number | false
    max?: number | false
    allocateValid?: boolean
    require?: boolean
    prevent?: boolean
  }>(),
  {
    type: 'text',
    _valid: false,
    _invalid: false,
    disabled: false,
    readonly: false,
    clearable: false,
    placeholder: false,
    name: 'input',
    applyColorToLeftIcon: true,
    applyColorToRightIcon: true,
    rules: 'any',
    min: false,
    max: false,
    allocateValid: true,
    require: true,
    prevent: false
  }
)

interface Emits {
  (e: 'leftClick'): void
  (e: 'rightClick'): void
  (e: 'update:modelValue', value: string | number): void
}

const emit = defineEmits<Emits>()

const inputRef = ref()

const valid = ref<boolean>(props._valid)
const invalid = ref<boolean>(props._invalid)

const value = ref<string | number>("")
const regex = ref<RegExp | false>(false)

const _placeholder = ref<string | false>(props.placeholder)

const fillPlaceholder = (value: string) => {
  if (!props.placeholder) {
    _placeholder.value = value
  }
}


if (props.rules === 'any'){
  regex.value = false
  fillPlaceholder('Text...')
} else if (props.rules === 'stringNumbers') {
  regex.value = new RegExp(/^[a-zA-Z0-9]+$/)
  fillPlaceholder('123ABC...')
} else if (props.rules === 'string'){
  regex.value = new RegExp(/^[a-zA-Z]+$/)
  fillPlaceholder('Abc...')
} else if (props.rules === 'numbers'){
  regex.value = new RegExp(/^-?\d+(?:\.\d+)?$/)
  fillPlaceholder('123.1...')
} else if (props.rules === 'integer'){
  regex.value = new RegExp(/^-?\d+$/)
  fillPlaceholder('123...')
} else if (props.rules === 'volume'){
  regex.value = new RegExp(/^(\d+(?:\.\d+)?)(?: ml| L)$/)
  fillPlaceholder('123.095')
} else if (props.rules === 'currency'){
  regex.value = new RegExp(/^(\d+(?:\.\d+)?)(?: ml| L)$/)
  fillPlaceholder('123.95')
}



const checkInput = (input: string) => {

  if (regex.value) {
    return regex.value.test(input)
  }

  if (props.min){
    return Number(input) >= props.min
  }

  if (props.max){
    return Number(input) <= props.max
  }

  if (props.require){
    return input !== '' && input !== null && input !== undefined
  }

  return true
}

const handleInput = (input: string) => {

  valid.value = checkInput(input)
  invalid.value = !valid.value



  if (valid.value && !props.readonly && !props.disabled) {
    value.value = input
    inputRef.value.value = value.value
    emit('update:modelValue', value.value)
  } else if (props.prevent) {
    inputRef.value.value = value.value
  } else if (!props.prevent) {
    value.value = input
    inputRef.value.value = value.value
  }
}



const slots = useSlots()


const leftIcon = () => {
  return !!slots['left']
}

const rightIcon = () => {
  return !!slots['right']
}

const handleClickLeftSlot = () => {
  emit('leftClick')
}

const handleClickRightSlot = () => {
  emit('rightClick')
}
</script>

<template>
  <div class="v-input">
    <div
      :class="['v-input__icon-left-box',
        { 'v-input__icon-disabled' : disabled},
        { 'v-input__icon-default' : !valid && !invalid && applyColorToRightIcon && !disabled },
        { 'v-input__icon-success' : valid && !invalid && applyColorToRightIcon && allocateValid && !disabled },
        { 'v-input__icon-danger' : !valid && invalid && applyColorToRightIcon && !disabled },
    ]">
      <slot name="icon-right" @click="handleClickLeftSlot"/>
    </div>
    <input
      :id="name"
      ref="inputRef"
      :type="type"
      :name="name"
      :class="['v-input__input',
        { 'v-input__input-pl' : leftIcon},
        { 'v-input__input-pr' : rightIcon},
        { 'v-input__icon-disabled' : disabled },
        { 'v-input__input-default' : !valid && !invalid },
        { 'v-input__input-success' : valid && !invalid && allocateValid && !disabled },
        { 'v-input__input-danger' : !valid && invalid && !disabled },
      ]"
      :placeholder="_placeholder"
      :value="value"
      :aria-invalid="invalid"
      :aria-describedby="`${name}-description`"
      :disabled="disabled"
      v-bind="{ ...(invalid && { ariaDescribedby: `${name}-error` }) }"
      @input="handleInput($event.target.value)"
      />
    <div
      :class="['v-input__icon-right-box',
        { 'v-input__icon-disabled' : disabled},
        { 'v-input__icon-default' : !valid && !invalid && applyColorToLeftIcon && !disabled },
        { 'v-input__icon-success' : valid && !invalid && applyColorToLeftIcon && allocateValid && !disabled },
        { 'v-input__icon-danger' : !valid && invalid && applyColorToLeftIcon && !disabled },
    ]">
      <slot name="icon-left" @click="handleClickRightSlot" />
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/themes/main/components/input.scss";

:slotted(svg) {
  @apply h-5 w-5;
}
</style>

