<script setup lang="ts">
import {computed} from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark', // !TODO pass variants
  disabled: boolean,
  size?: 'tiny' | 'small' | 'medium' | 'large', // !TODO pass sizes and add default size !(Now your default type is 'small' it bad)
  backgroundColor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark', // !TODO pass colors
  colorBold?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  href?: string,
  tag?: string,
  to?: string | Record<string, any>,
  target?: '_self' | '_blank' | '_parent' | '_top',
  loading?: boolean,
  // ALSO add your fixes too global
}>(), {
  variant: 'primary',
  disabled: false,
  size: 'small',
  backgroundColor: 'primary',
  colorBold: 500
})

const component = computed<string>(() => {
  if (props.tag) {
    return props.tag
  }

  if (props.href) {
    return 'a'
  }
  if (props.to) {
    return 'router-link'
  }
  return 'button'
})

interface Emits {
  (e: 'click'): void;
}
const emit = defineEmits<Emits>();

const onClick = () => {
  emit('click')
}

interface AttributesInterface {
  href?: string,
  to?: string | Record<string, any>,
  target?: '_self' | '_blank' | '_parent' | '_top'
}

const attrs = computed<AttributesInterface>(() => {
  const attributes: AttributesInterface = {};

  if (props.href) {
    attributes.href = props.href
  }

  if (props.to) {
    attributes.to = props.to
  }

  if (props.target) {
    attributes.target = props.target
  }

  return attributes

})




</script>


<template>
  <component
    v-bind="attrs"
    :is="component"
    :class="[
      'btn flex',
      { 'btn-disabled': disabled },
      `btn-${variant}`,
      `btn-${size}`,
      `btn-${backgroundColor}-${colorBold}`,
    ]"
    :disabled="disabled"
    @click="onClick"
  >

    <slot
      v-if="loading"
      name="loadingSlot">
      <svg class="animated-spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </slot>

    <slot v-else />
  </component>
</template>



<style scoped>
</style>
