/** @type {import('tailwindcss').Config} */
export default {
  content: ["./indexedDB.html", "./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors: {
        'navBarColor': '#3F5919',
        'galeryTankColor': '#3F5919',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [

  ],
}