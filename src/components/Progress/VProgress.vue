<script setup lang="ts">
import { computed } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    ready: number | string
    volume: number | string
    estimatedLoad?: number | string
    estimatedUnload?: number | string
    loaded?: number | string
    isShipping?: boolean
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
    estimatedLoadLabel?: string
    estimatedUnloadLabel?: string
    loadedLabel?: string
    threeDecimals?: boolean
    removeHiddenOverflow?: boolean
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
    estimatedLoadLabel: 'Оцінка завантаження',
    estimatedUnloadLabel: 'Оцінка розвантаження',
    loadedLabel: 'Завантажено',
    threeDecimals: false
  }
)

const areEstimatedEqual = computed(() => {
  return Number(props.estimatedLoad) === Number(props.estimatedUnload)
})

const isEstimatedLoadBigger = computed(() => {
  return Number(props.estimatedLoad) > Number(props.estimatedUnload)
})

const shippingVolume = computed(() => {
  if(props.isShipping) {

    if(areEstimatedEqual.value) {
      return props.estimatedLoad
    } else if(isEstimatedLoadBigger.value) {
      return props.estimatedLoad
    } else {
      return props.estimatedUnload
    }
  } else {
    return null
  }
})

const formatNumber = (value: number | string, keepString?: boolean) => {
  // return Number.isInteger(Number(value)) ? Number(value) : Number(Number(value).toFixed(2))
  const numStr = value.toString();
  const decimalIndex = numStr.indexOf('.');

  if (decimalIndex !== -1) {
    const decimalPart = numStr.slice(decimalIndex + 1);

    // If there are non-zero digits after the decimal point, show 2 decimal places
    const twoDecimals = decimalPart.slice(0,2);
    const firstThreeDecimals = decimalPart.slice(0,3);
    if(!props.threeDecimals && twoDecimals !== '00') {
      const result = numStr.split('.')[0] + '.' + twoDecimals;
      return  keepString ? result : Number(result);
    }
    else if (props.threeDecimals && firstThreeDecimals !== '000') {
      const result = numStr.split('.')[0] + '.' + firstThreeDecimals;
      return  keepString ? result : Number(result);
    }
  }

  // If no decimal point or only trailing zeros after the decimal point, show the whole number
  return Number(numStr.split('.')[0]);
}

const formattedVolume = computed(() => {
  return formatNumber(props.volume)
})

const formattedEsimatedLoad = computed(() => {
  return props.estimatedLoad ? formatNumber(props.estimatedLoad) : 0
})

const formattedEsimatedUnload = computed(() => {
  return props.estimatedUnload ? formatNumber(props.estimatedUnload) : 0
})

const formattedShippingVolume = computed(() => {
  return props.isShipping ? formatNumber(shippingVolume.value as number) : 0
})

const formattedUnload = computed(() => {
  return props.loaded ? formatNumber(props.loaded) : 0
})

const formattedReady = computed(() => {
  return formatNumber(props.ready)
})

const formattedPrice = computed(() => {
  return props.price ? formatNumber(props.price) : 0
})

const formattedLost = computed(() => {
  return props.lost ?  formatNumber(props.lost, true) : 0
})

const ready_width = () => {
    const p =
      props.isShipping ?
      ((Number(props.ready) / (shippingVolume.value as number) * 100))
      : ((Number(props.ready) / Number(props.volume)) * 100)

    if (p > 100) {
      return 100
    } else {
      return p
    }


}

const percent_volume_lost = computed(() => {
  return `${ ( (Number(formattedLost.value)  / Number(formattedVolume.value)) * 100).toFixed(2)}%`
})

const percent_unload = computed(() => {
  return `${ (( (Number(formattedUnload.value)  / Number(formattedShippingVolume.value)) * 100) - ready_width()).toFixed(2)}`
})

</script>

<template>

  <Popover class="v-progress__popover">
    <PopoverButton class="v-progress__popover__btn">
      <div
        :class="['v-progress']"
        :style="`height: ${height ? height : 20}px;`">
    <!-- Colored part -->
        <div
        v-if="ready_width() > 0"
        :class="[{ 'v-progress_full': ready_width() >= 100 }, 'z-10',
      {'v-progress__body__colored' : !noColor}]"
        :style="`width: ${ready_width()}%;height: ${height ? height : 20}px;`">
          <span class="opacity-0">1</span>
        </div>
        <!-- Orange part of loaded -->
        <div
          v-if="isShipping"
          class="bg-warning-400"
          :style="`width: ${percent_unload}%;height: ${height ? height : 20}px;`">
        </div>
    <!-- Red Part of Lost volume -->
      <div
      v-if="percent_volume_lost"
        class="bg-danger-200"
        :style="`width: ${percent_volume_lost};height: ${height ? height : 20}px;`">
        </div>
    <!-- Units and Numbers -->
        <div class="v-progress__numbers">

          <div :class="['v-progress__numbers-container', {'!overflow-visible': removeHiddenOverflow}]">
            <span :class="['v-progress__badge v-progress__badge_current', {'!overflow-visible': removeHiddenOverflow}]">
              <slot name="ready"></slot>
              <span>{{ formattedReady }}</span>
            </span>
          </div>

          <div :class="['v-progress__numbers-container space-x-1', {'!overflow-visible': removeHiddenOverflow}]">

            <span v-if="formattedPrice" class="v-progress__badge v-progress__badge_needed">
              <slot name="price"></slot>
              <span>{{ formattedPrice }} {{ showUnitsInPrice ? units : ''  }}</span>
            </span>

            <span v-else-if="formattedLost" :class="['v-progress__badge v-progress__badge_needed', {'!overflow-visible': removeHiddenOverflow}]">
              <slot name="lost"></slot>
              <span>{{ formattedLost }}</span>
            </span>

            <span v-if="!isShipping" :class="['v-progress__badge v-progress__badge_total', {'!overflow-visible': removeHiddenOverflow}]">
              <slot name="volume"></slot>
              <span>{{ formattedVolume }} {{ units }}</span>
            </span>

            <span v-else :class="['v-progress__badge v-progress__badge_total', {'!overflow-visible': removeHiddenOverflow}]">
              <slot name="volume"></slot>
              <span v-if="areEstimatedEqual">{{ formattedEsimatedLoad }} {{ units }}</span>
              <span v-else>{{ formattedEsimatedLoad }} / {{ formattedEsimatedUnload  }} {{ units }}</span>
            </span>

          </div>
        </div>
      </div>
    </PopoverButton>

    <PopoverPanel v-if="price || formattedVolume || formattedReady || formattedLost" class="v-progress__popover__panel">
      <div class="v-progress__popover__triangle"></div>
      <div v-if="price" class="v-progress__popover__row">
        <span class="v-progress__popover__row__label">{{ priceLabel }}:</span>
        <span class="v-progress__popover__row__value">{{ price }} {{ showUnitsInPrice ? units : ''  }}</span>
      </div>
      <div v-if="formattedVolume" class="v-progress__popover__row">
        <span class="v-progress__popover__row__label">{{ volumeLabel }}:</span>
        <span class="v-progress__popover__row__value">
          {{ formattedVolume }} {{ units }}
        </span>
      </div>
      <div v-if="formattedReady" class="v-progress__popover__row">
        <span class="v-progress__popover__row__label">{{ readyLabel }}:</span>
        <span class="v-progress__popover__row__value">{{ formattedReady }} {{ units }}</span>
      </div>
      <div v-if="formattedLost" class="v-progress__popover__row">
        <span class="v-progress__popover__row__label">{{ lostLabel }}:</span>
        <span class="v-progress__popover__row__value">{{ formattedLost }} {{ units }}</span>
      </div>
    </PopoverPanel>
  </Popover>
</template>

<style lang="scss" scoped>
@import '../../assets/themes/main/components/progress.scss';
</style>
