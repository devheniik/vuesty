<script setup lang="ts">
import { computed } from 'vue'
import { throttle } from 'lodash'

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
    awaitTime?: number
  }>(),
  {
    disabled: false,
    size: 'medium',
    color: 'primary',
    fontWeight: 500,
    awaitTime: 2000,
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

const onClick = throttle(() => {
  if (props.disabled || props.loading) {
    return;
  }
  emit('click');
}, props.awaitTime, {leading: true, trailing: false});

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

const getColor = computed(() => {
  if (props.color === 'primary') {
    return 'v-button_primary'
  } else if (props.color === 'secondary') {
    return 'v-button_secondary'
  } else if (props.color === 'light') {
    return 'v-button_light'
  } else if (props.color === 'success') {
    return 'v-button_success'
  } else if (props.color === 'warning') {
    return 'v-button_warning'
  } else if (props.color === 'danger') {
    return 'v-button_danger'
  } else if (props.color === 'upgrade') {
    return 'v-button_upgrade'
  } else if (props.color === 'tertiary') {
    return 'v-button_tertiary'
  } else if (props.color === 'info') {
    return 'v-button_info'
  } else if (props.color === 'neutral') {
    return 'v-button_neutral'
  }
  else {
    return 'v-button_primary'
  }
})
</script>

<template>
  <component
    v-bind="attrs"
    :is="component"
    :class="[
      { 'v-button_disabled': disabled },
      `v-button_${size}`,
      getColor,
      {'v-button_icon': $slots.icon && size !== 'small'},
      {'v-button_icon_sm' : $slots.icon && size === 'small'},
      {'v-button_loading': loading},
      'v-button']"
    :disabled="disabled"
    @click="onClick">
    <div v-if="$slots['icon-left']" :class="[{'v-button_with-text':  $slots.default} ,'icon-container icon-left']">
      <slot name="icon-left" />
    </div>
    <div v-if="$slots.icon" class="icon-container">
      <slot name="icon" />
    </div>
    <slot  />
    <div v-if="loading" class="v-button__loading_slot" >
      <slot name="loadingSlot">
        <svg class="v-animated-spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </slot>
    </div>

    <div v-if="$slots['icon-right']" class="icon-container icon-right">
      <slot name="icon-right" />
    </div>
  </component>
</template>

<style lang="scss">
@import '../../assets/themes/main/components/button.scss';
</style>
