/** @type {import('tailwindcss').Config} */
import { defaultTheme as theme } from './src/styles/themes/default.ts'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Nunito', 'sans-serif'],
    },
    extend: {
      colors: {
       theme
      },
      backgroundImage: {
        'header-cover': "url('/src/assets/cover.svg')",
      }
      
    },
  },
  plugins: [],
}