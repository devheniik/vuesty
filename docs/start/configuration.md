---
title: Configuration
---

# Configuration

## Step. 1: Tailwind css

Install tailwind css, full guide [here](https://tailwindcss.com/docs/installation)

## Step. 2: Install your style

Add Vuesty and Vue for the project.

This styles which we use in library you can change for yourself

```javascript [tailwind.config.js]
const colors = require('tailwindcss/colors')

// ...
 theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        50: '#EDF6FF',
        100: '#C8E3FF',
        200: '#A4D0FF',
        300: '#248EFF',
        400: '#1285FF',
        500: '#007AFF',
        600: '#0072ED',
        700: '#006ADB',
        800: '#0061C8',
        900: '#0058B6',
        1000: '#004FA4',
      },
      secondary: colors.gray,
      success: {
        50: '#EFFCF1',
        100: '#D0F6D5',
        200: '#51DD66',
        300: '#41D958',
        400: '#31D64A',
        500: '#28CD41',
        600: '#26BE3C',
        700: '#23AF38',
        800: '#20A133',
        900: '#1D922E',
        1000: '#1A832A',
      },
      warning: {
        50: '#FFBB5B',
        100: '#FFB349',
        200: '#FFAC37',
        300: '#FFA424',
        400: '#FF9C12',
        500: '#FF9500',
        600: '#ED8A00',
        700: '#DB8000',
        800: '#C87500',
        900: '#B66A00',
        1000: '#A46000',
      },
      danger: {
        50: '#FFF1F0',
        100: '#FFD4D2',
        200: '#FFB8B4',
        300: '#FF473D',
        400: '#FF473D',
        500: '#FF3B30',
        600: '#FF2418',
        700: '#FF1003',
        800: '#EC0C00',
        900: '#D70B00',
        1000: '#C10A00',
      },
      gray: colors.gray,
      info: colors.teal,
      neutral: colors.neutral,
      upgrade: colors.pink,
      black: colors.black,
      white: colors.white,
      tertiary: colors.indigo,
    },
    // ...

```
