const forms = require('@tailwindcss/forms');
const lineClamp = require('@tailwindcss/line-clamp');
const { fontFamily } = require('tailwindcss/defaultTheme');

/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    './src/components/**/*.@(tsx|ts)',
    './src/containers/**/*.@(tsx|ts)',
    './src/pages/**/*.tsx',
    './src/layouts/**/*.@(tsx|ts)',
  ],
  plugins: [forms, lineClamp],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', ...fontFamily.sans],
      display: 'baskerville',
    },
    fontSize: {
      xxs: ['0.625rem', { lineHeight: '1rem' }],
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.25rem', { lineHeight: '1.875rem' }],
      xl: ['1.5rem', { lineHeight: '2rem' }],
      '2xl': ['2rem', { lineHeight: '2.5rem' }],
      '3xl': ['2.5rem', { lineHeight: '3rem' }],
      '4xl': ['3.5rem', { lineHeight: '4rem' }],
      '5xl': ['4.5rem', { lineHeight: '4rem' }],
      '6xl': ['6rem', { lineHeight: '5.5rem' }],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      blue: '#1E2D3A',
      purple: '#1E2D3A',
      red: '#1E2D3A',
      yellow: {
        100: '#FFD954',
        200: '#ebc94d',
      },
      green: {
        100: '#DEF5CD',
        200: '#1E2D3A',
      },
    },
  },
};
