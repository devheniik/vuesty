<template>
  <div class="flex">
    <<<<<<< HEAD
    <button
      class="item rounded-l font-bold text-primary-500"
      @click="previousPage">
      &lt;
    </button>
    =======
    <button
      class="item rounded-l font-bold text-primary-500"
      @click="previousPage">
      <ChevronLeftIcon class="h-4" />
    </button>
    >>>>>>> 4ca898895455f5bf8d24b13d301d67683ddb61c1
    <div class="flex">
      <div v-for="n in showArr" :key="n">
        <div
          class="item"
          :class="{ active: activeIndex === n }"
          @click="pickPage(n)">
          {{ n }}
        </div>
      </div>
    </div>
    <<<<<<< HEAD
    <button class="item rounded-r font-bold text-primary-500" @click="nextPage">
      &gt;
    </button>
    =======
    <button class="item rounded-r font-bold text-primary-500" @click="nextPage">
      <ChevronRightIcon class="h-4" />
    </button>
    >>>>>>> 4ca898895455f5bf8d24b13d301d67683ddb61c1
  </div>
</template>

<script setup lang="ts">
<<<<<<< HEAD
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
=======
import { ref, computed } from 'vue';
import type { Ref } from 'vue';
import {ChevronRightIcon, ChevronLeftIcon} from '@devheniik/icons'
>>>>>>> 4ca898895455f5bf8d24b13d301d67683ddb61c1

const props = defineProps<{
  totalPages: number
}>()

interface Emits {
  (e: 'paginationClick', page: Ref<number>): void
}
const emit = defineEmits<Emits>()

const activeIndex = ref<number>(1)

const showArr = computed(() => {
  if (props.totalPages > 6) {
    const middleNums: Ref<number[]> = ref([])
    if (activeIndex.value) {
      for (let i = activeIndex.value - 2; i <= activeIndex.value + 2; i++) {
        middleNums.value.push(i)
      }

      // Pagination Start Numbers ->

      if (activeIndex.value === 4) {
        return [1, ...middleNums.value, '...', props.totalPages]
      }

      if (activeIndex.value < 4) {
        const startMiddleNums: Ref<number[]> = ref([])
        for (let i = 1; i <= activeIndex.value + 2; i++) {
          startMiddleNums.value.push(i)
        }
        // middleNums.value = startMiddleNums.value
        return [...startMiddleNums.value, '...', props.totalPages]
      }

      // Pagination End Numbers ->

      if (activeIndex.value === props.totalPages - 3) {
        return [1, '...', ...middleNums.value, props.totalPages]
      }

      if (activeIndex.value > props.totalPages - 3) {
        const endMiddleNums: Ref<number[]> = ref([])
        for (let i = activeIndex.value - 2; i < props.totalPages; i++) {
          endMiddleNums.value.push(i)
        }
        // middleNums.value = endMiddleNums.value
        return [1, '...', ...endMiddleNums.value, props.totalPages]
      }
    }

    return [1, '...', ...middleNums.value, '...', props.totalPages]
  }
  const nums = []
  for (let i = 1; i <= props.totalPages; i++) {
    nums.push(i)
  }
  return [...nums]
})

const pickPage = (n: number | string): void => {
  if (typeof n !== 'string') activeIndex.value = n
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
<<<<<<< HEAD
  @apply cursor-pointer border border-primary-200 p-2 hover:border-primary-500;
=======
  @apply flex items-center justify-center w-8 h-8 border border-primary-200 hover:border-primary-500 cursor-pointer
>>>>>>> 4ca898895455f5bf8d24b13d301d67683ddb61c1
}

.active {
  @apply !bg-primary-100 text-primary-500;
}
</style>
