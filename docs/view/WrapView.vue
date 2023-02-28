<template>
  <div class="v-wrap-view" :class="[{ 'v-space-x-2': horizontal }, { 'v-space-y-2': vertical }]">
    <slot></slot>
  </div>
</template>

<script lang="js">
import { defineComponent} from "vue"

export default defineComponent({
  name: 'VWrapView',
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
