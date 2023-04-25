<template>
    <div
    class="switch-wrapper"
    :class="{ 'switch-wrapper-disabled': disabled }"
    @click="toggleSwitch"
  >
    <div class="switch" :class="{ 'switch-active': modelValue }">
      <div class="switch-circle" :class="{ 'switch-circle-active': modelValue }">
        <slot></slot>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  modelValue: boolean;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const toggleSwitch = () => {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue);
  }
};
</script>

<style scoped>
@import '../../assets/themes/main/components/switch.scss';
</style>

