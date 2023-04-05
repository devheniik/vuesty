<template>
  <div>
    <label class="relative">
      <input
        :checked="isChecked"
        :disabled="disabled"
        :class="[{'v-checkbox_error': error}, {'v-checkbox_checked': modelValue}, 'v-checkbox']"
        type="checkbox"
        @click.prevent="handleClick"
      />
      <div
      class="show w-4 h-4 bg-primary-500  hidden top-[3px] z-20 rounded-md absolute inset-0  items-center justify-center pointer-events-none"
    >
      <svg fill="none" viewBox="0 0 7 7" width="8" height="7" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.33301 2.66699L3.33301 4.66699L6.66634 1.00032" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </div>
      <span v-if="label" class="v-checkbox__label">{{ label }}</span>
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
  // send request to the server and get the response
  const response = await sendRequest();

  // update the checkbox state based on the response
  if (response === 'success') {
    isChecked.value = !isChecked.value;
    emits('update:modelValue', isChecked.value);
    emits('change-checked', isChecked.value);
  }
}

async function sendRequest(): Promise<string> {
  // send request to the server and return the response
  return 'success';
}
</script>

<style scoped>
@import '../../assets/themes/main/components/checkbox.scss';

.v-checkbox_checked ~ .show {
  display: flex;
}


</style>
