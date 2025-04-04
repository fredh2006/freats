/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens:{
          "xs": "500px"
        },
        fontFamily: {
          oswald: ['var(--font-oswald)'],
        }
      }
    },
    plugins: [],
  }