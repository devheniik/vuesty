<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    size?: 'tiny' | 'small' | 'medium' | 'big' | 'large' | 'huge' | 'gigantic'
    color?:
      | 'primary'
      | 'secondary'
      | 'light'
      | 'success'
      | 'warning'
      | 'danger'
      | 'upgrade'
      | 'tertiary'
      | 'info'
      | 'neutral'
    src?: string
    alt?: string
    text?: string
    status?: 'primary' | 'warning' | 'success' | 'danger'
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

  switch (props.size) {
    case 'tiny':
      attributes.width = 16
      attributes.height = 16
      break
    case 'small':
      attributes.width = 24
      attributes.height = 24
      break
    case 'medium':
      attributes.width = 32
      attributes.height = 32
      break
    case 'big':
      attributes.width = 40
      attributes.height = 40
      break
    case 'large':
      attributes.width = 48
      attributes.height = 48
      break
    case 'huge':
      attributes.width = 64
      attributes.height = 64
      break
    case 'gigantic':
      attributes.width = 80
      attributes.height = 80
      break
  }

  return attributes
})

const formatter = (text: string) => {
  if (/^[а-яёА-ЯЁa-zA-Z]+ [а-яёА-ЯЁa-zA-Z]+$/.test(text)) {
    const words = text.split(' ')
    const firstLetter = words[0].charAt(0).toUpperCase()
    const secondLetter = words[1] ? words[1].charAt(0).toUpperCase() : ''

    return `${firstLetter}${secondLetter}`
  } else if (text.match(/^[A-Za-z]+$/) || /[А-ЯІЇЄ]{2,}/i.test(text) || text.match(/^[а-яёА-ЯЁ]+$/)) {
    let count = 0
    let result = ''
    for (const character of text) {
      if (character !== ' ' && /^[\u0400-\u04FF\u0041-\u005A\u0061-\u007A]$/.test(character)) {
        result += character.toUpperCase()
        count++
        if (count === 2) {
          break
        }
      }
    }
    return result
  } else {
    return 'GT'
  }
}
</script>

<template>
  <div :class="['v-avatar', `v-avatar-${size}`, text && `v-avatar-letters-${color}`]">
    <img v-if="src" :src="src" v-bind="attrs" :alt="alt" class="v-avatar__img" loading="lazy" />

    <div v-else>
      {{ text && formatter(text) }}
    </div>

    <div
      v-if="status"
      :class="[`v_bg-${status}-medium`, `v-avatar__status-circle_${size}`, 'v-avatar__status-circle']"></div>
  </div>
</template>

<style lang="scss"></style>
