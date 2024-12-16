/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#0d253f',
        'lightBlue': '#01b4e4',
        'lightGreen': '#90cea1',
      },
    },
  },
  plugins: [],
}