/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        50: '#EDF6FF',
        100: '#C8E3FF',
        200: '#9AB6FD',
        300: '#248EFF',
        400: '#1285FF',
        500: '#0A64EC',
        600: '#093DC9',
        700: '#006ADB',
        800: '#0061C8',
        900: '#0058B6',
        1000: '#004FA4',
      },
      secondary: colors.gray,
      success: {
        50: '#eaf5f1',
        100: '#D0F6D5',
        200: '#abd9c5',
        300: '#41D958',
        400: '#31D64A',
        500: '#2D9F6F',
        600: '#247f59',
        700: '#23AF38',
        800: '#20A133',
        900: '#1D922E',
        1000: '#1A832A',
      },
      warning: {
        50: '#fff3e6',
        100: '#FFB349',
        200: '#ffcf99',
        300: '#FFA424',
        400: '#FF9C12',
        500: '#FF8800',
        600: '#DF7C0B',
        700: '#DB8000',
        800: '#C87500',
        900: '#B66A00',
        1000: '#A46000',
      },
      danger: {
        50: '#FAE6E7',
        100: '#FFD4D2',
        200: '#EA9CA1',
        300: '#FF473D',
        400: '#FF473D',
        500: '#CA0813',
        600: '#a2060f',
        700: '#FF1003',
        800: '#EC0C00',
        900: '#D70B00',
        1000: '#C10A00',
      },
      gray: colors.gray,
      info: {
        ...colors.teal,
        50: '#E6F9F8',
        200: '#9AE7E3',
        500: '#02C2B9',
        600: '#018D87',
      },
      neutral: {
        ...colors.neutral,
        20: '#F6F7F9',
        50: '#F2F4F4',
        200: '#DDE0E2',
        500: '#6F767B',
        600: '#464B4E',
      },
      upgrade: {
        ...colors.pink,
        50: '#FBEFF9',
        200: '#F0C1E8',
        500: '#D964C5',
        600: '#CD32B2',
      },
      black: colors.black,
      white: colors.white,
      tertiary: {
        ...colors.indigo,
        50: '#F2E5FF',
        200: '#CC99FF',
        500: '#8000FF',
        600: '#6600CC',
      },
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },

    textColor: theme => theme('colors'),

    },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

