/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#222222",
      }
    },
  },
  plugins: [],
}