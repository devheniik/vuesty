<!-- <script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
  measure: string
  current: number
  total: number
}>(),
{
  current: 0,
  total: 150,
  measure: 'т'
}
)

const percent = computed(() => {
  return props.current /  (props.total / 100)
})


const progressPercent = computed(() => {
  if (percent.value < 1) {
    return 0
  }

  if (percent.value  > 1 ) {
    return percent.value + '%'
  }

  return 0
})
</script>

<template>
  <div class="v-progress">
    <span
    class="v-progress__badge v-progress__badge_current">{{current}} {{ measure}}</span>

    <div class="v-progress__body">
      <span
      :class="[{'v-progress_full': percent >= 100}, 'v-progress__body__colored']"
      :style="{ width: progressPercent }">
        <span v-if="percent < 100" class="v-progress__body__indicator"></span>
      </span>
    </div>

    <span class="v-progress__badge v-progress__badge_total">{{total}} {{ measure }}</span>

  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/themes/main/components/progress.scss";
</style> -->





<script setup lang="ts">
import {computed} from 'vue'

const props = withDefaults(
  defineProps<{
  ready: number,
  loaded: number,
  way?: number,
  volume: number,
  units: string,
  height?: number,
  small?: boolean,
  shipment?: boolean,
  full?: boolean,
  }>(), {
    ready: 0,
    volume: 150,
    units: 'т',
    way: 0,
    full: true,
    shipment: false,
  })

const ready_width = () => {
  if (props.shipment) {
    const p = props.ready / props.loaded * 100
    if (p > 100) {
      return 100
    } else {
      return p
    }
  } else {
    const p = props.ready / props.volume * 100
    if (p > 100) {
      return 100
    } else {
      return p
    }
  }
}


const volume_needed = computed(() => {
  if(props.volume > props.loaded) {
    const res = (props.volume - props.loaded).toFixed(2)
    if(!props.full) {

      return res.length < 5 ? res : '...'
    }
    else return res
  }
  else return 0
})

const percent_volume_lost = computed(() => {
  return `${((props.loaded - props.ready) / props.volume  * 100).toFixed(2)}%`
})

const percent_in_way = computed(() => {
  return `${((props.way / props.volume) * 100).toFixed(2)}%`
})

</script>

<template>
  <div
  :class="` v-progress z-10  h-full  cursor-pointer w-full text-center flex  items-center rounded-lg overflow-hidden text-white`"
  :style="`height: ${height ? height : 20}px;`"
  >
    <div
    v-if="ready_width() > 0"
    :class="[{'v-progress_full': ready_width() >= 100}, 'v-progress__body__colored z-10']"
    :style="`width: ${ready_width()}%;height: ${height ? height : 20}px;`">
      <span class="opacity-0">1</span>
    </div>
    <div
    class="bg-danger-1000"
    :style="`width: ${percent_volume_lost};height: ${height ? height : 20}px;`">
    </div>
    <div
    class="test"
    :style="`width: ${percent_in_way};height: ${height ? height : 20}px;`">
    </div>
    <div
    class="flex items-center justify-between w-full absolute z-10 text-xs px-1 h-full">
    <div>
      <span class="v-progress__badge v-progress__badge_current">
      {{ ready }}
      </span>
    </div>

    <div>
      <span class="v-progress__badge v-progress__badge_needed">
        {{volume_needed}}
      </span>

      <span
      v-if="!shipment"
      class="v-progress__badge v-progress__badge_total"
      >
        {{ volume }} {{units}}
      </span>
    </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/themes/main/components/progress.scss";
</style>
