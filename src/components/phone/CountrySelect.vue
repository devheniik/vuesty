<template>
  <div class="v-phone__country">
    <div class="country-input__container" @click="showAllOptions">
      <input v-model="searchCountry" class="v-phone__country__input" @input="handleSearch" type="text" placeholder="UA"  @blur="showOptions=false">
      <ChevronDownIcon class="v-phone__country__icon" />
    </div>

    <ul v-show="showOptions" class="v-phone__country__list">
      <li v-for="option in filteredList" :key="option" class="v-phone__country__list__item" @mousedown.prevent="selectOption(option)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getCountries } from 'libphonenumber-js'
import { ref, computed, watch } from 'vue'
import { ChevronDownIcon } from '@devheniik/icons'

const emits = defineEmits(['update:modelValue'])
const props = defineProps<{ modelValue: string }>()

const allCountries = getCountries()

const searchCountry = ref(props.modelValue)
const showOptions = ref(false)

const filteredList = computed(() => {
  return allCountries.filter((option) => option.toUpperCase().includes(searchCountry.value.toUpperCase()))
})

const hideOptions = () => {
  showOptions.value = false
}

const selectOption = (option) => {
  searchCountry.value = option
  hideOptions()
  emits('update:modelValue', option)
}

const handleSearch = (e) => {
  searchCountry.value = e.target.value
}

const showAllOptions = () => {
  searchCountry.value = ''
  showOptions.value = true
}

watch(
  () => props.modelValue,
  (newValue) => {
    searchCountry.value = newValue;
  }
);
</script>

<style lang="scss" scoped>
@import "../../assets/themes/main/components/phone.scss";
</style>
