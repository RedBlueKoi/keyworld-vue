/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "title-blue": "#34495E"
      }
    },
    fontSize: {
      "title-size": ["72px", "64px"]
    }
  },
  plugins: []
}
