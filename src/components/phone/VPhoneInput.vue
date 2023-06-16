<script setup lang="ts">
import { parsePhoneNumberFromString, parsePhoneNumber, AsYouType,
  type CountryCode } from 'libphonenumber-js'
import { ref, watch, computed } from 'vue'
import CountrySelect from './CountrySelect.vue'

const emits = defineEmits(['update:modelValue'])
const props = defineProps<{ modelValue: string }>()

const propValue = ref<{ nationalNumber: string, countryCallingCode?: string }>({
  nationalNumber: props.modelValue || '',
})

const initialPhoneNumber = props.modelValue && typeof props.modelValue === 'string'
  ? parsePhoneNumberFromString(props.modelValue)
  : null

const selectedCountry = ref<CountryCode>(initialPhoneNumber?.country || 'UA')

const nationalNumber = computed({
  get: () => propValue.value.nationalNumber,
  set: (value: string) => {
    let phoneNumber =  parsePhoneNumberFromString(value)

    if (!phoneNumber || !phoneNumber.isValid()) {

      phoneNumber = parsePhoneNumberFromString(value, selectedCountry.value)
    }

    const formattedNumber =  phoneNumber?.format('E.164') || value
    propValue.value.nationalNumber = value

    emits('update:modelValue', formattedNumber)
  },
})

watch(selectedCountry, (newValue, oldValue) => {
  console.log('selectedCountryWatcher');
  if (newValue !== oldValue && newValue !== null && newValue !== undefined) {
    const phoneNumber = parsePhoneNumber(nationalNumber.value, newValue)
    const formattedNumber = phoneNumber?.format('E.164') || ''
    propValue.value.nationalNumber = nationalNumber.value
    emits('update:modelValue', formattedNumber)
  }
})


// Changing the country code
watch(nationalNumber, (newValue, oldValue) => {
  console.log('nationalNumberWatcher');

  if (newValue !== oldValue && newValue !== null && newValue !== undefined) {
    const formatter = new AsYouType(selectedCountry.value)
    console.log(formatter);

    const formattedValue = formatter.input(newValue)
    const newParsedNumber = parsePhoneNumberFromString(formattedValue)

    if (newParsedNumber && newParsedNumber.isValid() && newParsedNumber.country) {
      selectedCountry.value = newParsedNumber.country
    }
  }
})

watch(() => props.modelValue, (newValue, oldValue) => {
  if (newValue !== oldValue && newValue !== null && newValue !== undefined) {
    console.log(props.modelValue);

    nationalNumber.value = newValue
  }
})

const updateHandler = () => {
  if (nationalNumber.value !== null && nationalNumber.value !== undefined && selectedCountry.value !== null && selectedCountry.value !== undefined) {
    console.log('updateHandler');

    const phoneNumber = parsePhoneNumber(nationalNumber.value, selectedCountry.value)
    const formattedNumber = phoneNumber?.format('E.164') || nationalNumber.value
    emits('update:modelValue', formattedNumber)
  }
}
</script>

<template>
  <div class="v-phone">
    <CountrySelect v-model="selectedCountry" @update:modelValue="selectedCountry = $event" />
    <input v-model="nationalNumber" placeholder="+380 93 903 7103" class="v-phone__input" type="text" @update:model-value="updateHandler">
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/themes/main/components/phone.scss";
</style>
