/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand colors for BlackGnome
        'gnome-dark': '#0a0a0a',
        'gnome-gray': '#1a1a1a',
        'gnome-accent': '#ff5500',
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
