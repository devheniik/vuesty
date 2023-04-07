<template>
  <div>
    <label class="v-checkbox__label">
      <input
        :disabled="disabled"
        :checked="isChecked"
        :class="[{'v-checkbox_error': error}, {'v-checkbox_checked': isChecked}, 'v-checkbox']"
        type="checkbox"
        @click="handleClick"
      />
      <span v-if="label" class="v-checkbox__label__text">{{ label }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'change-checked', value: boolean): void
}>()

const props = withDefaults(defineProps<{
  label?: string
  disabled?: boolean
  error?: boolean
  modelValue?: boolean
}>(), {
  label: '',
  disabled: false,
  error: false
});

const isChecked = ref(props.modelValue || false);


async function handleClick() {
  if (props.disabled) return;
    isChecked.value = !isChecked.value;

    emits('update:modelValue', isChecked.value);
    emits('change-checked', isChecked.value);
}
</script>

<style scoped>
@import '../../assets/themes/main/components/checkbox.scss';
</style>
