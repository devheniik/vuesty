<script setup lang="ts">
import { computed } from 'vue'
import type { Sizes, Colors as GlobalColors } from '@/types/global/global'
import type { MainColors } from './types'

const props = withDefaults(
  defineProps<{
    size?: Sizes // !TODO pass sizes and add default size !(Now your default type is 'small' it bad)
    color?: GlobalColors
    src?: string
    alt?: string
    width?: number
    height?: number
    text?: string
    status?: MainColors
  }>(),
  {
    size: 'medium',
    color: 'primary',
  }
)

interface AvatarAttributesInterface {
  width?: number
  height?: number
}

const attrs = computed<AvatarAttributesInterface>(() => {
  const attributes: AvatarAttributesInterface = {}

  if (props.width) {
    attributes.width = props.width
  }

  if (props.height) {
    attributes.height = props.height
  }

  return attributes
})

const formatter = (text: string) => {
  if (/^[а-яёА-ЯЁa-zA-Z]+ [а-яёА-ЯЁa-zA-Z]+$/.test(text)) {
    const words = text.split(' ')
    const firstLetter = words[0].charAt(0).toUpperCase()
    const secondLetter = words[1] ? words[1].charAt(0).toUpperCase() : ''

    return `${firstLetter}${secondLetter}`
  } else if (
    text.match(/^[A-Za-z]+$/) ||
    /[А-ЯІЇЄ]{2,}/i.test(text) ||
    text.match(/^[а-яёА-ЯЁ]+$/)
  ) {
    let count = 0
    let result = ''
    for (const character of text) {
      if (
        character !== ' ' &&
        /^[\u0400-\u04FF\u0041-\u005A\u0061-\u007A]$/.test(character)
      ) {
        result += character.toUpperCase()
        count++
        if (count === 2) {
          break
        }
      }
    }
    return result
  } else {
    return 'IФ'
  }
}
</script>

<template>
  <div
    :class="[
      'avatar',
      `avatar-${size}`,
      text ? `avatar-letters-${color}` : '',
      'relative',
    ]">
    <img
      v-if="src"
      :src="src"
      v-bind="attrs"
      :alt="alt"
      class="border-2 border-white" />
    <div v-else>
      {{ text ? formatter(text) : '' }}
    </div>
    <div
      v-if="status"
      class="absolute bottom-0 right-0 h-2 w-2 rounded-full border border-white"
      :class="[
        [`bg-${status}-500`],
        { 'right-1': size === 'big' },
        { 'right-1 h-2.5 !w-2.5': size === 'large' },
        { 'right-1.5 h-3 !w-3': size === 'huge' },
        { 'right-1 bottom-2 h-3 !w-3': size === 'gigantic' },
      ]"></div>
  </div>
</template>

<style lang="scss"></style>
