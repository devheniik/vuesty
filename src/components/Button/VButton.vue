<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    size?: 'small' | 'medium' | 'big'
    color?:
      | 'primary'
      | 'secondary'
      | 'light'
      | 'success'
      | 'warning'
      | 'danger'
      | 'upgrade'
      | 'tertiary'
      | 'info'
      | 'neutral'
    href?: string
    tag?: string
    to?: string | Record<string, any>
    target?: '_self' | '_blank' | '_parent' | '_top'
    loading?: boolean
  }>(),
  {
    disabled: false,
    size: 'medium',
    color: 'primary',
    fontWeight: 500,
  }
)

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
  (e: 'click'): void
}

const emit = defineEmits<Emits>()

const onClick = () => {
  emit('click')
}

interface AttributesInterface {
  href?: string
  to?: string | Record<string, any>
  target?: '_self' | '_blank' | '_parent' | '_top'
}

const attrs = computed<AttributesInterface>(() => {
  const attributes: AttributesInterface = {}

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
    :class="[{ 'v-button_disabled': disabled }, `v-button_${size}`, `v-button_${color}`, {'v-button_icon': $slots.icon && size !== 'small'}, {'v-button_icon_sm' : $slots.icon && size === 'small'}, 'v-button']"
    :disabled="disabled"
    @click="onClick">
    <div v-if="$slots['icon-left']" :class="[{'v-button_with-text':  $slots.default} ,'icon-container icon-left']">
      <slot name="icon-left" />
    </div>
    <div v-if="$slots.icon" class="icon-container">
      <slot name="icon" />
    </div>
    <slot v-if="loading" name="loadingSlot">
      <svg class="v-animated-spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </slot>

    <slot v-else />
    <div v-if="$slots['icon-right']" class="icon-container icon-right">
      <slot name="icon-right" />
    </div>
  </component>
</template>

<style lang="scss">
@import '../../assets/themes/main/components/button.scss';
</style>
