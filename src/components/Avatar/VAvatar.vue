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
  // Check if text contains exactly two words separated by a space
  if (/^[а-яёА-ЯЁa-zA-Z]+ [а-яёА-ЯЁa-zA-Z]+$/.test(text)) {
    const words = text.split(' ');
    const firstLetter = words[0].charAt(0).toUpperCase();
    const secondLetter = words[1].charAt(0).toUpperCase();

    return `${firstLetter}${secondLetter}`;
  }
  // Check if text matches a pattern with a word followed by a word in parentheses
  else if (/^[а-яёА-ЯЁa-zA-Z]+ \([а-яёА-ЯЁa-zA-Z]+\)$/.test(text)) {
    const match = text.match(/^([а-яёА-ЯЁa-zA-Z]+) \(([а-яёА-ЯЁa-zA-Z]+)\)$/);
    const firstLetter = match ? match[1].charAt(0).toUpperCase() : '';
    const secondLetter = match ? match[2].charAt(0).toUpperCase() : '';

    return `${firstLetter}${secondLetter}`;
  }
  // Check if text contains more than two words
  else if (/^[а-яёА-ЯЁa-zA-Z\s]+$/.test(text)) {
    const words = text.split(' ').filter(word => word.length > 0);
    const firstLetter = words[0].charAt(0).toUpperCase();
    const secondLetter = words[1] ? words[1].charAt(0).toUpperCase() : '';

    return `${firstLetter}${secondLetter}`;
  }
  // Check if text is a single word (English or Cyrillic)
  else if (
    /^[A-Za-z]+$/.test(text) ||
    /^[А-ЯІЇЄа-яёА-ЯЁ]{2,}$/i.test(text)
  ) {
    let count = 0;
    let result = '';

    // Loop through each character to find the first two letters
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
    return 'A';
  }
}

</script>

<template>
  <div :class="['v-avatar', `v-avatar_${size}`, text && `v-avatar_letters v-avatar_letters_${color}`]">
    <img v-if="src" :src="src" v-bind="attrs" :alt="alt" class="v-avatar_img" loading="lazy" />

    <div v-else-if="text">
      {{ text && formatter(text) }}
    </div>

    <div v-else>
      <svg class="v-avatar__img"  viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <circle cx="20.5" cy="20" r="20" fill="url(#pattern0)"/>
      <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#image0_2039_34954" transform="scale(0.00208333)"/>
      </pattern>

      </defs>
      </svg>

    </div>

    <div
      v-if="status"
      :class="[`v_bg-${status}-medium`, `v-avatar__status-circle_${size}`, 'v-avatar__status-circle']">
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/themes/main/components/avatar.scss';
</style>
