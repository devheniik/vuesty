<script lang="ts" setup>
import {ref} from 'vue'
import {ChevronUpDownIcon} from '@devheniik/icons'

const props = withDefaults(defineProps<{
  modelValue: string | number | null | string[] | number[],
  openDefault?: boolean,
}>(),
  {
    openDefault: false,
  }
)

interface Emits {
  (e: 'focus'): void,
  (e: 'focusOut'): void,
  (e: 'click'): void,
  (e: 'openPanel'): void,
  (e: 'closePanel'): void,
}

const emit = defineEmits<Emits>();

// * Panel functions

const open = ref(props.openDefault)

const openPanel = () => {
  open.value = true
  emit('openPanel')
}

const closePanel = () => {
  open.value = false
  emit('closePanel')
}


// * Emits functions

// Focus emits

const onFocus = () => {
  openPanel()
  emit('focus')
}

const onFocusOut = () => {
  closePanel()
  emit('focusOut')
}

</script>

<template>
    <div class="relative mt-1 w-full">
      <button type="button" class="relative h-8 w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" aria-haspopup="select" aria-expanded="true" aria-labelledby="select-label" @focusout="onFocusOut" @focus="onFocus">
        <span class="block truncate">Tom Cook</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <ChevronUpDownIcon class="h-5 w-5 text-gray-400"/>
      </span>
      </button>
      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ul v-show="open" class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="select" aria-labelledby="select-label" aria-activedescendant="select-option-3">
          <!--
            Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

            Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
          -->
          <li class="text-gray-900 relative cursor-default select-none py-2 pl-8 pr-4" role="option">
            <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
            <span class="font-normal block truncate">Wade Cooper</span>

            <!--
              Checkmark, only display for selected option.

              Highlighted: "text-white", Not Highlighted: "primary-600"
            -->
            <span class="primary-600 absolute inset-y-0 left-0 flex items-center pl-1.5">
            <!-- Heroicon name: mini/check -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
          </span>
          </li>
        </ul>
      </transition>
    </div>
</template>

<style scoped>

</style>
