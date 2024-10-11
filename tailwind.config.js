import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: 'rgb(18, 18, 18)',
          200: 'rgb(51, 51, 51)'
        }
      },
      screens: {
        sml: '545px',
        ml: '890px'
      },
      fontFamily: {
        inter: "Inter",
        montserrat: "Montserrat"
      },
      boxShadow: {
        'social': '0 10px 10px rgba(0, 0, 0, 0.1)',
        'dark': '0 10px 10px rgba(0, 0, 0, 0.6)'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

