<template>
  <div class="radio-button">
    <input
      id="input"
      class="radio-button__input"
      type="radio"
      :value="value"
      :checked="modelValue === value"
      @input="updateValue"
    />
    <label v-if="$slots.default" class="radio-button__label" for="input">
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  value: string | number | boolean | null,
  label?: string | number,
  modelValue: string | number | boolean
}>()

const emit = defineEmits(['update:modelValue'])

const  updateValue = () => {
  emit('update:modelValue', props.value)
}
</script>

<style scoped>
@import '../../assets/themes/main/components/radioButton.scss';
</style>
