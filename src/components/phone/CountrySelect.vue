<template>
  <div class="v-phone__country">
    <input v-model="searchCountry" class="v-phone__country__input" type="text" placeholder="UA" @click="showOptions = true" @blur="showOptions=false">
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
