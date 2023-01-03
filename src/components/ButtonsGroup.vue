<template>
  <div>
    <Disclosure>
          <DisclosureButton class="w-full my-2"
            ><p class="flex justify-center bg-primary-300 ui-open:bg-primary-500 p-4 rounded-lg text-gray-200 font-semibold">
               {{ title }}
            </p></DisclosureButton
          >
          <DisclosurePanel>
            <div class="space-y-6 w-full shadow-lg p-10 bg-slate-300 ">
              <div
                v-for="(btn, i) of btnType"
                :key="i">
                <CLButton
                :class="[ btn === 'disabled' ?  'btn-disabled': '',
                (i !== btnType.length - 1) ? `${btnClass}` : `btn-icon${getClassesEndings[0]}`,
                ((i === btnType.length - 1) && getClassesEndings[1]) ? `btn-icon${getClassesEndings[1]}` : '']"
                :left-icon="btn === 'leftIcon' || btn === 'bothIcons' ? 'ChevronLeftIcon' : ''"
                :right-icon="btn === 'rightIcon' || btn === 'bothIcons' ? 'ChevronRightIcon' : ''"
                :icon="!btn ? 'ChevronLeftIcon' : ''"
                @click="clicker(i)">
                  {{ btn }}
                </CLButton>
                <code-highlight v-show="showCode && index===i"  language="html">
                  <pre v-if="btn === 'disabled'">
{{`<CLButton
class="${btnClass}"
:disabled="true">
</CLButton>`}}
                  </pre>
                  <pre v-else-if="btn === 'leftIcon'">
{{`<CLButton
class="${btnClass}"
:left-icon="'ChevronLeftIcon'">
</CLButton>`}}
                  </pre>
                  <pre v-else-if="btn === 'rightIcon'">
{{`<CLButton
class="${btnClass}"
:right-icon="'ChevronRightIcon'">
</CLButton>`}}
                  </pre>
                  <pre v-else-if="btn === 'bothIcons'">
{{`<CLButton
class="${btnClass}"
:right-icon="'ChevronRightIcon'"
:left-icon="'ChevronLeftIcon'">
</CLButton>`}}
                  </pre>
                  <pre v-else-if="!btn">
{{`<CLButton
class="${((i === btnType.length - 1) && getClassesEndings[1]) ? 'btn-icon' +  getClassesEndings[0] + ' ' + 'btn-icon' + getClassesEndings[1] : 'btn-icon' + getClassesEndings[0]}">
</CLButton>`}}
                  </pre>
                  <pre v-else>
{{`<CLButton
class="${btnClass}">
</CLButton>`}}
                  </pre>
                </code-highlight>
              </div>
            </div>
          </DisclosurePanel
          >
        </Disclosure>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, computed } from 'vue';
import CLButton from './CLButton.vue'
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import {btnClassType, titleType} from '../types/buttons/Buttons'

const props = defineProps<{
  title: {
    type: titleType,
    default: 'btn',
  },
  btnClass: btnClassType
}>()

const btnType = ['disabled', 'button', 'leftIcon', 'rightIcon', 'bothIcons', '']
const showCode = ref(false)
const index: Ref<number | null> = ref(null)

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

const getClassesEndings = computed(() => {
  const classes = props.btnClass.split(' ')
  const newClasses = []
  for (const el of classes) {
    newClasses.push(el.slice(el.search('-')))
  }

  return newClasses
})
</script>

<style scoped>

</style>
