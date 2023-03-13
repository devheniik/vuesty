<template>
  <div>
    <label>
      <input value="checked" :disabled="disabled" :class="[{'v-checkbox_error': error}, 'v-checkbox']" type="checkbox" @change="handleChange" />
      <span class="v-checkbox__label">{{ label }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits(['update:modelValue'])
  const props = withDefaults(defineProps<{
    label?: string
    disabled?: boolean
    error?: boolean
    value: boolean
  }>(), {
    label: '',
    disabled: false,
    error: false,
    value: false
  });

  const propValue = ref(props.value)

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    propValue.value = target.checked;
    emits('update:modelValue', propValue)
  }




</script>

<style scoped>
@import '../../assets/themes/main/components/checkbox.scss';
</style>
