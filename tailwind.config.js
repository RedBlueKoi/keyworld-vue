/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34495E",
        accent: "#41B883",
        defaultBackground: "#D9D9D9",
        darkBackground: "#C7C6C6"
      }
    }
    // fontSize: {
    //   "title-size": ["72px", "64px"]
    // }
  },
  plugins: []
}
