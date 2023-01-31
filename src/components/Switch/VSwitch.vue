<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

interface Emits {
  (e: 'switch', enabled: boolean): void
}

defineEmits<Emits>()

const enabled = ref(false)
</script>

<template>
  <Switch
    v-model="enabled"
    :class="[enabled ? 'v_switch_active' : 'v_switch_inactive', 'v_switch']
    ">
    <slot>
      <span
        aria-hidden="true"
        :class="[enabled ? 'v_switch__slider_active' : 'v_switch__slider_inactive', 'v_switch__slider']"
        class="v_switch__slider" />
    </slot>
  </Switch>
</template>

<style scoped></style>
