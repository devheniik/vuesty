<template>
  <div class="py-16">
    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-success-800 hover:bg-success-1000' : 'bg-gray-500 hover:bg-gray-700'"
      class="relative inline-flex h-3.5 w-[22px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
      "
    >
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-2' : 'translate-x-0'"
        class="pointer-events-none inline-block h-2.5 w-2.5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      />
    </Switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

const enabled = ref(false)

interface Emits {
  (e: 'switch', enabled: boolean): void
}

defineEmits<Emits>()


</script>
