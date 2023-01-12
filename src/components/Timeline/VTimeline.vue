<template>
  <div
  class="text-lg border-2 border-primary-200 rounded-md w-full grid grid-cols-5">
    <div
    v-for="(item, id) of timeLine"
    :key="id"
    class="timelineItem flex border-r-2 border-primary-200 hover:bg-primary-200  group w-full m-auto"
    @click="activeIndex = id"
    >
      <div class="inline-block mx-auto px-5">
        <button
        class="cursor-pointer py-1 flex items-center active:text-white ">
          <span class="font-medium">{{item}}</span>

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
<script setup lang="ts" >
import {ref} from 'vue'
import type { Ref } from 'vue';

defineProps<{
  timeLine: string[]
}>()

const activeIndex: Ref<number|null> = ref(null)
  // import moment from 'moment';
  // function formatDate(date) {
  //   return moment(date).format("DD.MM")
  // }

  </script>

  <style lang="scss" scoped>
    .badge {
      @apply px-2.5 py-0.5 bg-primary-200 text-primary-500 rounded-md ml-1 text-xs
    }
  </style>
