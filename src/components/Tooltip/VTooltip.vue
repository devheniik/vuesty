<template>
  <div :data-placement="placement" class="tooltip">

    <div class="tooltip__container">
      <div class="tooltip__container__slot">
        <slot name="component"></slot>
      </div>
      <div class="tooltip__box">
        <slot name="tooltip"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  placement: 'top' | 'bottom' | 'left' | 'right'
}>()

</script>

<style scoped>
@import '../../assets/themes/main/components/tooltip.scss';
</style>
