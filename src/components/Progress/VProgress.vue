<script setup lang="ts">
import { computed } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    ready: number | string
    volume: number | string
    units?: string
    height?: number
    lost?: number | string
    price?: number | string
    showUnitsInPrice?: boolean
    noColor?: boolean
    readyLabel?: string
    lostLabel?: string
    volumeLabel?: string
    priceLabel?: string
  }>(),
  {
    ready: 0,
    volume: 0,
    units: '',
    showUnitsInPrice: false,
    noColor: false,
    readyLabel: 'Готово',
    lostLabel: 'Втрачено',
    volumeLabel: "Об'єм",
    priceLabel: 'Ціна',
  }
)

const formatNumber = (value: number | string) => {
  // return Number.isInteger(Number(value)) ? Number(value) : Number(Number(value).toFixed(2))
  const numStr = value.toString();
  const decimalIndex = numStr.indexOf('.');

  console.log(numStr);


  if (decimalIndex !== -1) {
    const decimalPart = numStr.slice(decimalIndex + 1);

    // If there are non-zero digits after the decimal point, show 2 decimal places
    const firstTwoDecimals = decimalPart.slice(0,2);
    console.log(firstTwoDecimals)
    if (firstTwoDecimals !== '00') {
      return numStr.split('.')[0] + '.' + firstTwoDecimals;
    }
  }

  // If no decimal point or only trailing zeros after the decimal point, show the whole number
  return numStr.split('.')[0];
}

const formattedVolume = computed(() => {
  return formatNumber(props.volume)
})

const formattedReady = computed(() => {
  return formatNumber(props.ready)
})

const formattedLost = computed(() => {
  return props.lost ?  formatNumber(props.lost) : 0
})

const ready_width = () => {
  const p = (Number(props.ready) / Number(props.volume)) * 100
  if (p > 100) {
    return 100
  } else {
    return p
  }
}

const percent_volume_lost = computed(() => {
  return `${ ( (formattedLost.value  / formattedVolume.value as number) * 100).toFixed(2)}%`
})

</script>

<template>

  <Popover class="relative">
    <PopoverButton class="w-full focus:outline-none">
      <div
        :class="`v-progress z-10  flex  h-full w-full cursor-pointer items-center  overflow-hidden rounded-lg text-center text-white`"
        :style="`height: ${height ? height : 20}px;`">
    <!-- Colored part -->
        <div
        v-if="ready_width() > 0"
        :class="[{ 'v-progress_full': ready_width() >= 100 }, 'z-10',
      {'v-progress__body__colored' : !noColor}]"
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
              {{ formattedReady }}
            </span>
          </div>

          <div class="v-progress__numbers-container space-x-1">

            <span v-if="price" class="v-progress__badge v-progress__badge_needed">
              {{ price }} {{ showUnitsInPrice ? units : ''  }}
            </span>

            <span v-else-if="lost" class="v-progress__badge v-progress__badge_needed">
              {{ formattedLost }}
            </span>

            <span class="v-progress__badge v-progress__badge_total">
              {{ formattedVolume }} {{ units }}
            </span>

          </div>
        </div>
      </div>
    </PopoverButton>

    <PopoverPanel class="absolute z-50 bg-primary-500 text-white p-5 rounded-lg">
      <div v-if="price" class="flex justify-between gap-4">
        <span class="text-sm font-bold whitespace-nowrap">{{ priceLabel }}:</span>
        <span class="text-sm font-bold whitespace-nowrap">{{ price }} {{ showUnitsInPrice ? units : ''  }}</span>
      </div>
      <div v-if="formattedVolume" class="flex justify-between gap-4">
          <span class="text-sm font-bold whitespace-nowrap">{{ volumeLabel }}:</span>
          <span class="text-sm font-bold whitespace-nowrap">{{ formattedVolume }} {{ units }}</span>
        </div>
      <div class="grid gap-4">
        <div v-if="formattedReady" class="flex justify-between gap-4">
          <span class="text-sm font-bold whitespace-nowrap">{{ readyLabel }}:</span>
          <span class="text-sm font-bold whitespace-nowrap">{{ formattedReady }} {{ units }}</span>
        </div>
        <div v-if="formattedLost" class="flex justify-between gap-4">
          <span class="text-sm font-bold whitespace-nowrap">{{ lostLabel }}:</span>
          <span class="text-sm font-bold whitespace-nowrap">{{ formattedLost }} {{ units }}</span>
        </div>
      </div>
    </PopoverPanel>
  </Popover>
</template>

<style lang="scss" scoped>
@import '../../assets/themes/main/components/progress.scss';
</style>
