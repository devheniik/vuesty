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
  <div class="py-16">
    <Switch
      v-model="enabled"
      :class="
        enabled
          ? 'bg-success-800 hover:bg-success-1000 [&>svg]:translate-x-2'
          : 'bg-gray-500 hover:bg-gray-700 [&>svg]:translate-x-0'
      "
      class="relative inline-flex h-3.5 w-[22px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 [&>svg]:transition [&>svg]:duration-200 [&>svg]:ease-in-out">
      <slot>
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-2' : 'translate-x-0'"
          class="pointer-events-none inline-block h-2.5 w-2.5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out" />
      </slot>
    </Switch>
  </div>
</template>
