<template>
  <pre>
<!--    {{tree}}-->
  </pre>
  <div class="v-tree-select">
    <v-tree-node
      v-for="(node, index) in bufferTree"
      :key="index"
      :data="node"
      :label-key="labelKey"
      :value-key="valueKey"
      @select="handleSelect"
    />
  </div>
</template>

<script setup lang="ts">
import {cloneDeep} from 'lodash'
import {computed, ref, watch} from 'vue'
import VTreeNode from '../TreeNode/VTreeNode.vue'
const props = withDefaults(
  defineProps<{
    data: Array<object>
    modelValue: Array<string | number>
    labelKey: string
    valueKey: string
  }>(),
  {
    labelKey: 'name',
    valueKey: 'id',
  }
)

interface Emit {
  (event: 'update:modelValue', value: Array<string | number>): void
}

const emit = defineEmits<Emit>()

const selectedValue = ref<Array<string | number>>(props.modelValue)

const handleSelect = (value: string | number) => {
  // console.log(

    markChildNodeAsSelectedByParentValue(bufferTree.value, value)
  // )
  if (props.modelValue.includes(value)) {
    selectedValue.value = props.modelValue.filter((v) => v !== value)
  } else {
    selectedValue.value = [...props.modelValue, value]
  }


  emit('update:modelValue', selectedValue.value)
}

// const markChildNodeAsSelectedByParentValue = (startNode: any, value: string | number) => {
//   startNode.forEach((node: any) => {
//     if (node.children?.length) {
//       node.children.forEach((child: any) => {
//         if (child[props.valueKey] === value) {
//           node.__selected = true
//         }
//         if (child.children?.length) {
//           markChildNodeAsSelectedByParentValue(child.children, value)
//         }
//       })
//     }
//   })
// }

const findNodeByValue = (startNode: any, value: string | number) => {
  startNode.forEach((node: any) => {
    if (node[props.valueKey] === value) {
      console.log(node)
      return node
    }
    if (node.children?.length) {
      return findNodeByValue(node.children, value)
    }
  })
  return null
}
const markChildNodeAsSelectedByParentValue = (startNode: any, value: string | number) => {
  // startNode.forEach((node: any) => {
  //   if (node[props.valueKey] === value) {
  //     node.children.forEach((child: any) => {
  //       console.log(child[props.labelKey])
  //       child.__selected = true
  //     })
  //   }
  //   if (node.children?.length) {
  //     return findNodeByValue(node.children, value)
  //   }
  // })
  // return null

  bufferTree.value.forEach((node: any) => {
    if (node.children?.length) {
      node.children.forEach((child: any) => {
        if (child[props.valueKey] === value) {
          node.__selected = true
        }
        // if (child.children?.length) {
        //   markChildNodeAsSelectedByParentValue(child.children, value)
        // }
      })
    }
  })
}

const getInfoIfParentSelectedByChildValue = (startNode: any, value: string | number) => {
  startNode.forEach((node: any) => {
    if (node.children?.length) {
      node.children.forEach((child: any) => {
        if (child[props.valueKey] === value) {
          console.log(child[props.labelKey])
          return node.__selected
        }
        if (child.children?.length) {
          return getInfoIfParentSelectedByChildValue(child.children, value)
        }
      })
    }
  })
  return null
}

const restructure = (e: any) => {
  const children = e.children.map((c: any) => restructure(c))
  return {
    [props.labelKey]: e[props.labelKey],
    [props.valueKey]: e[props.valueKey],
    __partially_selected:
      children?.some((child: any) => {
        return selectedValue.value.includes(child[props.valueKey])
          || child.children.some((thirdChild: any) => selectedValue.value.includes(thirdChild[props.valueKey]))
      }),
    __selected:
      (
        children.length
        && children.every((c: any) => { return c.__selected })
      )
      || selectedValue.value.includes(e[props.valueKey])
      || getInfoIfParentSelectedByChildValue(bufferTree.value, e[props.valueKey]),
    children: e.children.map((c: any) => restructure(c))
  }
}

// const tree = ref(
//   cloneDeep(
//     props.data.map((e) => restructure(e))
//   )
// )

const bufferTree = ref(cloneDeep(props.data))

watch(
  () => [bufferTree.value, selectedValue.value],
  () => {
    bufferTree.value = bufferTree.value.map(e => restructure(e))
  }
)
// const tree = computed(() => {
//   // eslint-disable-next-line vue/no-side-effects-in-computed-properties
//   bufferTree.value = cloneDeep(bufferTree.value.map(e => restructure(e)))
//   return bufferTree.value
// })
</script>

<style scoped>

</style>
