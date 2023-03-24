<script setup lang="ts">
import { parsePhoneNumberFromString, parsePhoneNumber, AsYouType } from 'libphonenumber-js'
import { ref, watch, computed } from 'vue'
import CountrySelect from './CountrySelect.vue'

const emits = defineEmits(['update:modelValue'])
const props = defineProps<{ modelValue: string }>()

const propValue = ref<{ nationalNumber: string, countryCallingCode?: string }>({
  nationalNumber: props.modelValue,
})
const initialPhoneNumber = parsePhoneNumberFromString(props.modelValue)
const selectedCountry = ref<string>(initialPhoneNumber?.country || 'UA')

const nationalNumber = computed({
  get: () => propValue.value.nationalNumber,
  set: (value: string) => {
    let phoneNumber = parsePhoneNumberFromString(value)
    if (!phoneNumber || !phoneNumber.isValid()) {
      const formatter = new AsYouType(selectedCountry.value)
      const formattedValue = formatter.input(value)
      phoneNumber = parsePhoneNumberFromString(formattedValue)
    }

    const formattedNumber = phoneNumber?.format('E.164') || ''
    propValue.value.nationalNumber = value
    emits('update:modelValue', formattedNumber)
  },
})

watch(selectedCountry, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    const phoneNumber = parsePhoneNumber(nationalNumber.value, newValue)
    const formattedNumber = phoneNumber?.format('E.164') || ''
    propValue.value.nationalNumber = nationalNumber.value
    emits('update:modelValue', formattedNumber)
  }
})

watch(nationalNumber, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    const formatter = new AsYouType(selectedCountry.value)
    console.log('formatter', formatter)

    const formattedValue = formatter.input(newValue)
    const newParsedNumber = parsePhoneNumberFromString(formattedValue)

    if (newParsedNumber && newParsedNumber.isValid() && newParsedNumber.country) {
      selectedCountry.value = newParsedNumber.country
    }
  }
})

const updateHandler = () => {
  const phoneNumber = parsePhoneNumber(nationalNumber.value, selectedCountry.value)
  const formattedNumber = phoneNumber?.format('E.164') || ''
  emits('update:modelValue', formattedNumber)
}
</script>

<template>
  <div class="v-phone">
    <CountrySelect v-model="selectedCountry" @update:modelValue="selectedCountry = $event" />
    <input v-model="nationalNumber" class="v-phone__input" type="text" @update:model-value="updateHandler">
  </div>
</template>

