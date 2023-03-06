<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { ChevronRightIcon, ChevronLeftIcon } from '@devheniik/icons'

const props = withDefaults(
  defineProps<{
  last_page: number,
  current_page?: number,
  modelValue: number | string,
}>(), {
  current_page: 1,
  modelValue: 10,
  }
)


const per_page_variants = [10,20,30,50]

interface Emits {
  (e: 'update:modelValue', value: number): void
  (e: 'paginationClick', page: Ref<number>): void
}

// , per_page: Ref<number>

const emit = defineEmits<Emits>()

const activePage = ref<number>(props.currentPage)

const paginationArr = computed(() => {
  if (props.last_page > 6) {
    const middleNums: Ref<number[]> = ref([])

    if (activePage.value) {
      for (let i = activePage.value - 2; i <= activePage.value + 2; i++) {
        middleNums.value.push(i)
      }

      // Pagination Start Numbers ->

      if (activePage.value === 4) {
        return [1, ...middleNums.value, '...', props.last_page]
      }

      if (activePage.value < 4) {
        const startMiddleNums: Ref<number[]> = ref([])
        for (let i = 1; i <= activePage.value + 2; i++) {
          startMiddleNums.value.push(i)
        }
        // middleNums.value = startMiddleNums.value
        return [...startMiddleNums.value, '...', props.last_page]
      }

      // Pagination End Numbers ->

      if (activePage.value === props.last_page - 3) {
        return [1, '...', ...middleNums.value, props.last_page]
      }

      if (activePage.value > props.last_page - 3) {
        const endMiddleNums: Ref<number[]> = ref([])
        for (let i = activePage.value - 2; i < props.last_page; i++) {
          endMiddleNums.value.push(i)
        }
        // middleNums.value = endMiddleNums.value
        return [1, '...', ...endMiddleNums.value, props.last_page]
      }
    }

    return [1, '...', ...middleNums.value, '...', props.last_page]
  }
  const nums = []
  for (let i = 1; i <= props.last_page; i++) {
    nums.push(i)
  }
  return [...nums]
})

const pickPage = (n: number | string): void => {
  if (typeof n !== 'string') activePage.value = n
  emit('paginationClick', activePage)
}

const previousPage = () => {
  activePage.value && activePage.value > 1 ? activePage.value-- : null
  emit('paginationClick', activePage)
}

const nextPage = () => {
  activePage.value && activePage.value < props.last_page ? activePage.value++ : null
  emit('paginationClick', activePage)
}
</script>

<template>
  <div class="v-pagination__container">
    <div class="v-pagination__per-page">
      <span>Показувати</span>
      <select
      :value="modelValue"
      class="v-pagination__per-page__select"
      name="select"
      @change="emit('update:modelValue', Number($event.target!.value))">
        <option v-for="i of per_page_variants" :key="i" :value="i">{{ i }}
        </option>
      </select>
    </div>
    <div class="v-pagination">
      <button class="v-pagination__arrow v-pagination__arrow_left" @click="previousPage">
        <ChevronLeftIcon class="v-pagination__arrow_size" />
      </button>

      <div class="v-pagination__body">
        <div v-for="n in paginationArr" :key="n">
          <div
            :class="[activePage === n  ? 'v-pagination__body__item_active' : 'v-pagination__box-shadow' , 'v-pagination__body__item']"
            @click="pickPage(n)">
            {{ n }}
          </div>
        </div>
      </div>

      <button class="v-pagination__arrow v-pagination__arrow_right" @click="nextPage">
        <ChevronRightIcon class="v-pagination__arrow_size" />
      </button>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@import '../../assets/themes/main/components/pagination.scss';
</style>
