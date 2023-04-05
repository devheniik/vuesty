<template>
  <div class="v-tree-node">
    <div class="v-tree-node__disclose">
      <component
        :is="chevronIcon"
        v-if="data.children.length"
        class="v-tree-node__disclose-icon"
        @click="toggleOpen"
      />
    </div>
    <div class="v-tree-node__checkbox-icon-box">
      <component
        :is="icon"
        :class="[icon === CheckboxEmptyIcon ? 'v-tree-node__checkbox-icon-empty' : 'v-tree-node__checkbox-icon']"
        @click="handleClick"
      />
    </div>
    <div class="v-tree-node__label" @click="handleClick">
      {{ data[labelKey] }} {{ props.data.__selected }}
    </div>
  </div>
  <div v-show="open" class="v-tree-node__children">
    <v-tree-node
      v-for="(subNode, index) in data.children"
      :key="index"
      :data="subNode"
      :label-key="labelKey"
      :value-key="valueKey"
      @select="childSelect"
    />
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'
import VTreeNode from './VTreeNode.vue'
import {
  CheckboxEmptyIcon,
  CheckboxSelectedIcon,
  CheckboxParticallySelectedIcon,
  ChevronRightIcon,
  ChevronDownIcon
} from '@devheniik/icons'

const props = withDefaults(defineProps<{
  data: object
  labelKey: string
  valueKey: string
}>(), {
  labelKey: 'name',
  valueKey: 'id',
})

interface Emit {
  (event: 'select', value: string | number): void
  (event: 'deselect', value: string | number): void
}

const emit = defineEmits<Emit>()

const handleClick = () => {
  emit('select', props.data[props.valueKey])
}

const childSelect = (value: string | number) => {
  emit('select', value)
}


const open = ref<boolean>(false)
const chevronIcon = computed(() => {
  return open.value ? ChevronDownIcon : ChevronRightIcon
})
const toggleOpen = () => {
  open.value = !open.value
}

const icon = computed(() => {
  if (props.data.__selected) {
    return CheckboxSelectedIcon
  } else if (props.data.__partially_selected) {
    return CheckboxParticallySelectedIcon
  } else {
    return CheckboxEmptyIcon
  }
})
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
