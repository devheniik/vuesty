<template>
  <div class="bg-slate-500 pr-12">
    <Disclosure>
      <DisclosureButton class="w-full my-2">
        <p class="flex justify-center ui-open:bg-primary-500 bg-primary-300 p-4 rounded-lg text-gray-200 font-semibold">
          Buttons colors
        </p>
      </DisclosureButton>
      <DisclosurePanel>
        <div>
          <div id="buttons" class="w-full shadow-lg p-10 bg-slate-300 gap-4">
            <div class="space-y-4">
              <div v-for="(color, id) of btnVariants" :key="id">
                <CLButton
                :class="`btn${color}`"
                @click="clicker(id)">
                  {{ 'button' + color }}
                </CLButton>
                <code-highlight v-show="showCode && index===id"  language="html">
                  <pre>
{{`<CLButton
:class="button${color}">
</CLButton>`}}
                  </pre>
                </code-highlight>
              </div>
            </div>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <div v-for="(btn, i) of titles" :key="i">
      <ButtonsGroup
      :title="(btn as titleType)"
      :btn-class="(btnClasses[i] as btnClassType)"
      >

      </ButtonsGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, Ref} from 'vue'
import CLButton from '../components/CLButton.vue'
import ButtonsGroup from '../components/ButtonsGroup.vue'
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import {btnClassType, titleType} from '../types/buttons/Buttons'


const showCode = ref(false)
const index: Ref<number|null> = ref(null)

const clicker = (id: number) => {
  if(id !== index.value) {
    if(showCode.value === false) {
      showCode.value = !showCode.value
      index.value = id
    }
    showCode.value = !showCode.value
    index.value = id
    showCode.value = !showCode.value
  } else {
    // If I click on the same window
    showCode.value = !showCode.value
    index.value = id
  }
}

const btnVariants = [
  '',
  '-light',
  '-success',
  '-warning',
  '-danger',
  '-white',
  '-gray',
  '-indigo',
  '-secondary',
  '-warning-secondary',
  '-indigo-secondary',
  '-success-secondary',
  '-danger-secondary',
  '-gray-secondary',
]

const btnClasses = [
'btn-big',
'btn-big btn-secondary',
'btn-big btn-light',
'btn-small',
'btn-small btn-secondary',
'btn-small btn-light',
'btn-tiny',
'btn-tiny btn-secondary',
'btn-tiny btn-light',
]

const titles = ['Big Primary Buttons', 'Big Secondary Buttons', 'Big Light Buttons', 'Small Primary Buttons', 'Small Secondary Buttons', 'Small Light Buttons', 'Tiny Primary Buttons', 'Tiny Secondary Buttons', 'Tiny Light Buttons']

</script>

<style scoped>
</style>
