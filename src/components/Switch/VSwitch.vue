<template>
    <div
    class="switch-wrapper"
    :class="[{ 'switch-wrapper-disabled': disabled }, {'switch-wrapper_alternative': alternativeColor}]"
    @click="toggleSwitch"
  >
    <div :class="['switch', {'switch_small' : isSmall}, { 'switch-active': modelValue }]">
      <div class="switch-circle" :class="{ 'switch-circle-active': modelValue }">
        <slot></slot>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  modelValue: boolean | number
  disabled?: boolean
  isSmall?: boolean
  alternativeColor?: boolean
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean | number): void;
}>();

const toggleSwitch = () => {
  if (!props.disabled) {
    if(typeof(props.modelValue) === 'number') {
      emit('update:modelValue', props.modelValue ? 0 : 1);
      return;
    }
    emit('update:modelValue', !props.modelValue);
  }
}


</script>

<style scoped>
@import '../../assets/themes/main/components/switch.scss';
</style>

