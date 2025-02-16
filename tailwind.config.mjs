/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#0B1120',
          900: '#1A237E',
          800: '#283593',
          700: '#303F9F',
          600: '#3949AB',
          500: '#3F51B5',
          400: '#5C6BC0',
          300: '#7986CB',
          200: '#9FA8DA',
          100: '#C5CAE9',
        },
        purple: {
          950: '#1A0B2E',
          900: '#4A148C',
          800: '#6A1B9A',
          700: '#7B1FA2',
          600: '#8E24AA',
          500: '#9C27B0',
          400: '#AB47BC',
          300: '#BA68C8',
          200: '#CE93D8',
          100: '#E1BEE7',
        },
      },
    },
  },
  plugins: [],
}
