<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { ChevronRightIcon, ChevronLeftIcon } from '@devheniik/icons'

const props = defineProps<{
  totalPages: number
}>()

interface Emits {
  (e: 'paginationClick', page: Ref<number>): void
}
const emit = defineEmits<Emits>()

const activeIndex = ref<number>(1)

const paginationArr = computed(() => {
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

<template>
  <div class="v-pagination">
    <button class="v-pagination__arrow v-pagination__arrow_left" @click="previousPage">
      <ChevronLeftIcon class="v-pagination__arrow_size" />
    </button>

    <div class="v-pagination__body">
      <div v-for="n in paginationArr" :key="n">
        <div
        :class="[{ 'v-pagination__body__item_active': activeIndex === n }, 'v-pagination__body__item']" @click="pickPage(n)">
          {{ n }}
        </div>
      </div>
    </div>

    <button class="v-pagination__arrow v-pagination__arrow_left" @click="nextPage">
      <ChevronRightIcon class="v-pagination__arrow_size" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/themes/main/components/pagination.scss";
</style>
