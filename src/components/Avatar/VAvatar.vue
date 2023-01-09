<script setup lang="ts">
import { computed } from 'vue'


const props = withDefaults(defineProps<{
  size?: 'tiny' | 'small' | 'medium' | 'large', // !TODO pass sizes and add default size !(Now your default type is 'small' it bad)
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light'  // !TODO pass colors
  src?: string,
  alt?: string,
  width?: number,
  height?: number,
  text?: string,
}>(), {
  size: 'small',
  color: 'primary',
})

interface AvatarAttributesInterface {
  width?: number,
  height?: number,
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
  } else if (text.match(/^[A-Za-z]+$/) || /[А-ЯІЇЄ]{2,}/i.test(text) || text.match(/^[а-яёА-ЯЁ]+$/)){
    let count = 0
    let result = ''
    for (const character of text) {
      if (character !== ' ' && /^[\u0400-\u04FF\u0041-\u005A\u0061-\u007A]$/.test(character)) {
        result += character.toUpperCase();
        count++;
        if (count === 2) {
          break;
        }
      }
    }
    return result;
  } else {
    return 'IФ'
  }
}

</script>

<template>
  <div :class="['avatar', `avatar-${size}`,  color ? `avatar-letters-${color}` : '']">
    <img v-if="src" :src="src" v-bind="attrs" :alt="alt" />
    <div v-else>
      {{ formatter(text) }}
    </div>
  </div>
</template>

<style lang="scss"></style>
