<script setup lang="ts">
import { ref, useSlots, watchEffect } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: string | number | null
    _valid?: boolean
    _invalid?: boolean
    disabled?: boolean
    readonly?: boolean
    step?: any
    placeholder?: string
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
    rules?: 'any' | 'email' | 'stringNumbers' | 'string' | 'numbers' | 'integer' | 'volume' | 'currency' | RegExp
    clearable?: boolean
    name?: string
    applyColorToLeftIcon?: boolean
    applyColorToRightIcon?: boolean
    min?: number | false
    max?: number | false
    allocateValid?: boolean
    required?: boolean
    prevent?: boolean
  }>(),
  {
    type: 'text',
    _valid: false,
    _invalid: false,
    disabled: false,
    readonly: false,
    clearable: false,
    name: 'input',
    applyColorToLeftIcon: true,
    applyColorToRightIcon: true,
    rules: 'any',
    min: false,
    max: false,
    allocateValid: false,
    required: false,
    prevent: false,
    step: 1,
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

const value = ref<string | number | null>(props.modelValue)
const regex = ref<RegExp | false>(false)

// const _placeholder = ref<string | false>(props.placeholder)

// const fillPlaceholder = (value: string) => {
//   if (!props.placeholder) {
//     _placeholder.value = value
//   }
// }

if (props.rules === 'any') {
  regex.value = false
} else if (props.rules === 'stringNumbers') {
  regex.value = new RegExp(/^[a-zA-Z0-9]+$/)
} else if (props.rules === 'email') {
  regex.value = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
} else if (props.rules === 'string') {
  regex.value = new RegExp(/^[a-zA-Z]+$/)
} else if (props.rules === 'numbers') {
  regex.value = new RegExp(/^-?\d+(?:\.\d+)?$/)
} else if (props.rules === 'integer') {
  regex.value = new RegExp(/^-?\d+$/)
} else if (props.rules === 'volume') {
  regex.value = new RegExp(/^(\d+(?:\.\d+)?)(?: ml| L)$/)
} else if (props.rules === 'currency') {
  regex.value = new RegExp(/^(\d+(?:\.\d+)?)(?: ml| L)$/)
}

const checkInput = (input: string) => {
  if (props.type === 'number') {
    const numberRegex = new RegExp(/^-?\d*\.?\d*$/)
    if (!numberRegex.test(input)) {
      return false
    }
  }

  if (regex.value) {
    return regex.value.test(input)
  }

  if (props.min) {
    return Number(input) >= props.min
  }

  if (props.max) {
    return Number(input) <= props.max
  }

  if (props.required) {
    return input !== '' && input !== null && input !== undefined
  }

  return true
}


const handleInput = (input: Event) => {
  const inputElement = input.target as HTMLInputElement
  const targetValue = inputElement.value;
  valid.value = checkInput(targetValue)
  invalid.value = !valid.value

  if (valid.value && !props.readonly && !props.disabled) {
    value.value = targetValue
    inputRef.value.value = value.value
    emit('update:modelValue', value.value)
  } else if (props.prevent) {
    inputRef.value.value = value.value
  } else if (!props.prevent) {
    value.value = targetValue
    inputRef.value.value = value.value
  }
}

watchEffect(() => {
  if (props.modelValue !== value.value) {
    value.value = props.modelValue
    inputRef.value.value = value.value
  }
})

const slots = useSlots()

const leftIcon = () => {
  return !!slots['icon-left']
}

const rightIcon = () => {
  return !!slots['icon-right']
}

console.log(leftIcon())

const handleClickLeftSlot = () => {
  emit('leftClick')
}

const handleClickRightSlot = () => {
  emit('rightClick')
}

const handleKeyPress = (event: KeyboardEvent) => {
  if(props.type !== 'number') return
  const keyValue = event.key

  if (!/^\d*\.?\d*$/.test(keyValue) && keyValue !== 'Backspace' && keyValue !== 'Tab' && keyValue !== 'Delete') {
    event.preventDefault();
  }
};
</script>

<template>
  <div class="v-input">
    <div
      v-if="leftIcon()"
      :class="[
        'v-input__icon-left-box',
        { 'v-input__icon-disabled': disabled },
        { 'v-input__icon-default': valid && !invalid && applyColorToRightIcon && !allocateValid && !disabled },
        { 'v-input__icon-success': valid && !invalid && applyColorToRightIcon && allocateValid && !disabled },
        { 'v-input__icon-danger': !valid && invalid && applyColorToRightIcon && !disabled },
      ]">
      <slot name="icon-left" @click="handleClickLeftSlot" />
    </div>
    <input
      :id="name"
      ref="inputRef"
      :name="name"
      :class="[
        'v-input__input',
        { 'v-input__input_disabled' : disabled},
        { 'v-input__input-pl': leftIcon() },
        { 'v-input__input-pr': rightIcon() },
        { 'v-input__icon-disabled': disabled },
        { 'v-input__input-default': !valid && !invalid },
        { 'v-input__input-success': valid && !invalid && allocateValid && !disabled },
        { 'v-input__input-danger': !valid && invalid && !disabled },
      ]"
      :placeholder="placeholder"
      :value="value"
      :aria-invalid="invalid"
      :aria-describedby="`${name}-description`"
      :disabled="disabled"
      :readonly="readonly"
      :step="step"
      :type="type === 'number' ? 'text' : type"
      v-bind="{ ...(invalid && { ariaDescribedby: `${name}-error` }) }"
      @keypress="handleKeyPress"
      @input="handleInput($event)" />
    <div
      v-if="rightIcon()"
      :class="[
        'v-input__icon-right-box',
        { 'v-input__icon-disabled': disabled },
        { 'v-input__icon-default': valid && !invalid && applyColorToLeftIcon && !allocateValid && !disabled },
        { 'v-input__icon-success': valid && !invalid && applyColorToLeftIcon && allocateValid && !disabled },
        { 'v-input__icon-danger': !valid && invalid && applyColorToLeftIcon && !disabled },
      ]">
      <slot name="icon-right" @click="handleClickRightSlot" />
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/themes/main/components/input.scss';

:slotted(svg) {
  @apply h-5 w-5;
}
</style>
