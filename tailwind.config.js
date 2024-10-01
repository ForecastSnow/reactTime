/** @type {import('tailwindcss').Config} */
export default {
  content: ["./indexedDB.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'navBarColor': '#3F5919',
        'sectionColor': '#58666B',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}