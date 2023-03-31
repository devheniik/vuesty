<template>
  <label class="radio-button">
    <input
      class="radio-button__input"
      type="radio"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      @input="updateValue"
    />
    <span v-if="label" class="radio-button__label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">

const props = defineProps<{
  name: string,
  value: string | number,
  label?: string,
  modelValue: string | number
}>()

const emit = defineEmits(['update:modelValue'])

const  updateValue = () => {
  emit('update:modelValue', props.value)
}
</script>

<style scoped>
@import '../../assets/themes/main/components/radioButton.scss';
</style>
