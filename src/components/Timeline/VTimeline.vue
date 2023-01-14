<template>
  <div class="grid w-full grid-cols-5 rounded-md border-2 border-primary-200 text-lg">
    <div
      v-for="(item, id) of timeLine"
      :key="id"
      class="timelineItem group m-auto flex w-full border-r-2 border-primary-200 hover:bg-primary-200"
      @click="activeIndex = id">
      <div class="mx-auto inline-block px-5">
        <button class="flex cursor-pointer items-center py-1 active:text-white">
          <span class="font-medium">{{ item }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<!-- <span
:class="[date === data.date ? 'text-white rounded-md ml-1 px-2.5  bg-blue-500 text-xs' :
'group-hover:bg-primary-500 group-hover:text-white badge', 'justify-center']">{{1}}</span> -->

<!-- @click="changeFilterDate(item.date)" -->
<!-- formatDate(data.date) -->

<!-- :class="{'bg-primary-200': data.date === body.filters.date}" -->
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

defineProps<{
  timeLine: string[]
}>()

const activeIndex: Ref<number | null> = ref(null)
// import moment from 'moment';
// function formatDate(date) {
//   return moment(date).format("DD.MM")
// }
</script>

<style lang="scss" scoped>
.badge {
  @apply ml-1 rounded-md bg-primary-200 px-2.5 py-0.5 text-xs text-primary-500;
}
</style>
