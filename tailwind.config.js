// tailwind.config.js

import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
      inter: ['Inter', 'serif'],
    },
    colors: {
      'pine-tree': '#12132D',
      'pine-tree-80': '#12132DCC',
      'pine-tree-60': '#12132D99',
      'pine-tree-15': '#12132D26',
      'pine-tree-5': '#12132D0D',
      'white': '#ffffff',
      'red': '#ff0000',
      'medium-slate-blue': '#797DFC',
      'medium-slate-blue-10': '#797DFC1A',
      'rich-black': '030712',
      'rich-black-50': '03071280',
      'cultured': '#F8F8F9',
      'eerie-black': '#1E1E1E',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'deep-koamaru-10':'#30325E1A',
      'anti-flash-white': '#F5F5F3',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // <-- Change this to use ES module syntax
  ],
});
