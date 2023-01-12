<template>
  <div class="flex">
    <button class="item rounded-l text-primary-500 font-bold" @click="previousPage">&lt;</button>
    <div class="flex">
      <div v-for="n in showArr" :key="n">
        <div
        class="item"
        :class="{'active' : activeIndex === n}"
        @click="pickPage(n)">
          {{ n }}
        </div>
      </div>
    </div>
    <button class="item rounded-r text-primary-500 font-bold" @click="nextPage">&gt;</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Ref } from 'vue';

const props = defineProps<{
  totalPages: number,
}>()

interface Emits {
  (e: 'paginationClick', page: Ref<number>): void
}
const emit = defineEmits<Emits>()

const activeIndex = ref<number>(1);

const showArr = computed(() => {
  if(props.totalPages > 6) {
    const middleNums: Ref<number[]> = ref([]);
    if(activeIndex.value) {
      for(let i = activeIndex.value - 2; i <= activeIndex.value  + 2; i++) {
        middleNums.value.push(i)
      }

      // Pagination Start Numbers ->

      if(activeIndex.value === 4) {
        return [1, ...middleNums.value, '...', props.totalPages]
      }

      if(activeIndex.value < 4) {
        const startMiddleNums: Ref<number[]> = ref([])
        for(let i = 1; i <= activeIndex.value  + 2; i++) {
          startMiddleNums.value.push(i)
        }
        // middleNums.value = startMiddleNums.value
        return [...startMiddleNums.value, "...", props.totalPages]
      }

      // Pagination End Numbers ->

      if(activeIndex.value === props.totalPages - 3) {
        return [1, '...', ...middleNums.value, props.totalPages]
      }

      if(activeIndex.value > props.totalPages - 3) {
        const endMiddleNums: Ref<number[]> = ref([])
        for(let i = activeIndex.value - 2; i < props.totalPages; i++) {
          endMiddleNums.value.push(i)
        }
        // middleNums.value = endMiddleNums.value
        return [1, '...', ...endMiddleNums.value,  props.totalPages]
      }
    }

    return [1,'...', ...middleNums.value, '...', props.totalPages]
  }
  const nums = []
  for (let i = 1; i <= props.totalPages; i++) {
    nums.push(i)
  }
  return [...nums]
})

const pickPage = (n: number | string): void => {
  if(typeof n !== 'string')
    activeIndex.value = n
    emit('paginationClick', activeIndex)
}

const previousPage = () => {
  activeIndex.value && activeIndex.value > 1 ? activeIndex.value-- : null
  emit('paginationClick', activeIndex)
}

const nextPage = () => {
  activeIndex.value && activeIndex.value < props.totalPages ? activeIndex.value++ : null
  emit('paginationClick', activeIndex)
}

</script>

<style scoped>
.item {
  @apply p-2 border border-primary-200 hover:border-primary-500 cursor-pointer
}

.active {
  @apply !bg-primary-100 text-primary-500
}

</style>
