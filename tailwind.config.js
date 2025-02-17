/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1e1b4b',       // Deep Indigo - Base Primary Dark
        'primary': '#3f3cbb',            // Medium Indigo - Main Primary
        'primary-light': '#706fd3',       // Light Indigo - Primary Light Accent
        'secondary': '#a29bfe',          // Lavender - Secondary/Vibrant Accent
        'secondary-dark': '#6c5ce7',     // Darker Lavender - Secondary Dark Accent
        'secondary-light': '#bdb8ff',    // Light Lavender - Secondary Light Accent
        'accent': '#f7f6ff',             // Very Light Purple - Soft Accent Color
        'text-title': '#ffffff',          // White - For strong titles
        'text-body': '#e0e7ff',           // Light Greyish Purple - Body Text
        'bg-light': '#f8f9fa',            // Very Light Background
        'bg-dark': '#120f3c'             // Deeper Dark Purple
      },
      fontFamily: {
        'display': ['"Poppins"', 'sans-serif'],
        'body': ['"Inter"', 'sans-serif']
      },
    },
  },
  plugins: [],
}
