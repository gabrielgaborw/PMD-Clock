/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        stop: {
          100: "#E43C22",
          200: "#CE270D"
        },
        start: {
          100: "#73E924",
          200: "#7AD20F"
        },
        reset: {
          100: "#4A92EA",
          200: "#207DEF"
        }
      }
    },
  },
  plugins: [],
}

