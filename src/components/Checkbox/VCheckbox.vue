<template>
  <div>
    <label>
      <input v-model="propValue" :disabled="disabled" :class="[{'v-checkbox_error': error}, 'v-checkbox']" type="checkbox" @change="handleChange" />
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
    modelValue: boolean
  }>(), {
    label: '',
    disabled: false,
    error: false
  });

  const propValue = ref(props.modelValue)

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    propValue.value = target.checked;
    emits('update:modelValue', propValue)
  }

</script>

<style scoped>
@import '../../assets/themes/main/components/checkbox.scss';
</style>
