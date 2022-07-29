/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34495E",
        accent: "#41B883",
        defaultBackgroudn: "D9D9D9"
      }
    }
    // fontSize: {
    //   "title-size": ["72px", "64px"]
    // }
  },
  plugins: []
}
