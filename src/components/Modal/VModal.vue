<template>
  <teleport to="#modals">
    <transition
      enter-active-class="v-modal__enter-active"
      enter-from-class="v-modal__enter-from"
      enter-to-class="v-modal__enter-to"
      leave-active-class="v-modal__leave-active">
      <div v-if="modelValue" :class="['v-modal']">
        <div :class="['v-modal__inner', `${width}`]">
          <slot></slot>
        </div>
        <div class="v-modal__outside" @click="$emit('update:modelValue', false)"></div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
defineProps({
  modelValue: Boolean,
  width: {
    type: String,
    default: 'w-auto',
    required: false,
  },
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
@import '../../assets/themes/main/components/modal.scss';
</style>
