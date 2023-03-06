<template>
  <textarea v-bind="props" :value="value" class="v-textarea" @input="handleInput"></textarea>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: string
    rows?: string | number
  }>(),
  {
    rows: 5,
  }
)

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const emit = defineEmits<Emits>()

const value = ref(props.modelValue)

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  value.value = target.value
  emit('update:modelValue', target.value)
}
</script>

<style>
@import '../../assets/themes/main/components/textarea.scss';
</style>
