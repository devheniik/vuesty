<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    ready: number | string
    volume: number | string
    units?: string
    height?: number
    lost?: number | string
    price?: number | string
    showUnitsInPrice?: boolean
  }>(),
  {
    ready: 0,
    volume: 0,
    units: '',
    showUnitsInPrice: false,

  }
)

const ready_width = () => {
  const p = (Number(props.ready) / Number(props.volume)) * 100
  if (p > 100) {
    return 100
  } else {
    return p
  }
}

const percent_volume_lost = computed(() => {
  return `${ ( (Number(props.lost) / Number(props.volume)) * 100).toFixed(2)}%`
})


</script>

<template>


  <div
    :class="`v-progress z-10  flex  h-full w-full cursor-pointer items-center  overflow-hidden rounded-lg text-center text-white`"
    :style="`height: ${height ? height : 20}px;`">
<!-- Colored part -->
    <div
    v-if="ready_width() > 0"
    :class="[{ 'v-progress_full': ready_width() >= 100 }, 'v-progress__body__colored z-10']"
    :style="`width: ${ready_width()}%;height: ${height ? height : 20}px;`">
      <span class="opacity-0">1</span>
    </div>
<!-- Red Part of Lost volume -->
    <div
    class="bg-danger-200"
    :style="`width: ${percent_volume_lost};height: ${height ? height : 20}px;`">
    </div>
<!-- Units and Numbers -->
    <div class="absolute z-10 flex h-full w-full items-center justify-between px-1 text-xs space-x-1">

      <div class="v-progress__numbers-container">
        <span class="v-progress__badge v-progress__badge_current">
          {{ ready }}
        </span>
      </div>

      <div class="v-progress__numbers-container space-x-1">

        <span v-if="price" class="v-progress__badge v-progress__badge_needed">
          {{ price }}{{ showUnitsInPrice ? units : ''  }}
        </span>

        <span v-else-if="lost" class="v-progress__badge v-progress__badge_needed">
          {{ lost }}
        </span>

        <span class="v-progress__badge v-progress__badge_total">
          {{ volume }}{{ units }}
        </span>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/themes/main/components/progress.scss';
</style>
