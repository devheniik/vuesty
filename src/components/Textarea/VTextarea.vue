<template>
  <textarea v-bind="props" v-model="currentValue" class="v-textarea"></textarea>
</template>

<script setup lang="ts">
  import { ref,  useSlots } from 'vue'

  const props = withDefaults(defineProps<{
    cols?: string | number,
    rows?: string | number,
  }>(),
  {
    cols: 30,
    rows: 5
  }
  )

  const $slots = useSlots();
  const currentValue = ref(getDefaultValue())

  function getDefaultValue() {
  if ($slots.default && $slots.default().length) {
    const defaultSlot = $slots.default()[0]
    const defaultSlotText = Array.isArray(defaultSlot.children)
      ? defaultSlot.children.reduce((acc, child) => {
          if (Array.isArray(child)) {
            return acc + child.join('')
          }
          if (typeof child === 'string') {
            return acc + child
          }
          return acc
        }, '')
      : defaultSlot.children?.toString() ?? ''

    return defaultSlotText.trim()
  }

    return ''
  }

</script>

<style>
@import '../../assets/themes/main/components/textarea.scss';
</style>
