<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { ChevronRightIcon, ChevronLeftIcon } from '@devheniik/icons'

const props = withDefaults(
  defineProps<{
    current_page: number
    from: number
    last_page?: number
    show_per_page?: boolean
    per_page: number
    to?: number
    total: number
    page: number
    limit: number
  }>(),
  {
    current_page: 1,
    from: 1,
    last_page: 1,
    show_per_page: true,
    per_page: 10,
    to: 10,
    total: 10,
    page: 1,
    limit: 10
  }
)

const per_page_variants = [10, 20, 30, 50]

interface Emits {
  (e: 'update:limit', value: number): void
  (e: 'update:page', value: number): void
  (e: 'change', value: any): void
}

const handleChange = () => {
  emit('change', {
    page: activePage.value,
    limit: selectedLimit.value
  })
}

const handleUpdateLimit = (event: Event) => {
  const target  = event.target as HTMLInputElement
  const value = target.value as string
  selectedLimit.value = Number(value)
  emit('update:limit', selectedLimit.value)
  handleChange()
}

const emit = defineEmits<Emits>()

const activePage = ref<number>(props.page)
const selectedLimit = ref<number>(props.limit)

const paginationArr = computed(() => {
  if (props.last_page) {
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
  }
  return []
})

const pickPage = (n: number | string): void => {
  if (typeof n !== 'string') activePage.value = n
  emit('update:page', activePage.value)
  handleChange()

}

const previousPage = () => {
  activePage.value && activePage.value > 1 ? activePage.value-- : null
  emit('update:page', activePage.value)
  handleChange()
}

const nextPage = () => {
  if (props.last_page) {
    activePage.value && activePage.value < props.last_page ? activePage.value++ : null
    emit('update:page', activePage.value)
    handleChange()
  }

}
</script>

<template>
  <div v-if="last_page !== 1" class="v-pagination__container">
    <div v-if="show_per_page" class="v-pagination__per-page">
      <span>Показувати</span>
      <select
        :value="selectedLimit"
        class="v-pagination__per-page__select"
        name="select"
        @change="handleUpdateLimit($event)">
        <option v-for="i of per_page_variants" :key="i" :value="i">{{ i }}</option>
      </select>
    </div>
    <div :class="[!show_per_page ? 'v-pagination_solo' : 'v-pagination']">
      <button :class="[{'v-pagination__arrow_disabled' : activePage === 1}, 'v-pagination__arrow v-pagination__arrow_left']" @click="previousPage">
        <ChevronLeftIcon class="v-pagination__arrow_size" />
      </button>

      <div class="v-pagination__body">
        <div v-for="n in paginationArr" :key="n">
          <div
            :class="[
              activePage === n ? 'v-pagination__body__item_active' : 'v-pagination__box-shadow',
              'v-pagination__body__item',
            ]"
            @click="pickPage(n)">
            {{ n }}
          </div>
        </div>
      </div>

      <button :class="[{'v-pagination__arrow_disabled' : activePage === last_page},'v-pagination__arrow v-pagination__arrow_right']" @click="nextPage">
        <ChevronRightIcon class="v-pagination__arrow_size" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/themes/main/components/pagination.scss';
</style>
