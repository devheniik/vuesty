<template>
  <div class="radio-button">
    <input
      :id="inputId"
      class="radio-button__input"
      type="radio"
      :value="value"
      :checked="modelValue === value"
      @input="updateValue"
    />
    <label v-if="$slots.default" class="radio-button__label" :for="inputId">
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
const props = defineProps<{
  value: string | number | boolean | null,
  label?: string | number,
  modelValue: string | number | boolean
  id?: string
}>()

const emit = defineEmits(['update:modelValue'])

const  updateValue = () => {
  emit('update:modelValue', props.value)
}

const inputId = computed(() => props.id || `radio-${Math.random().toString(36).slice(2, 12)}`)
</script>

<style scoped>
@import '../../assets/themes/main/components/radioButton.scss';
</style>
