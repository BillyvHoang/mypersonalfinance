/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary: '#262726',
        secondary: '#0ADD7C',
        Third: '#343434',
        background: '#252525',
        Text: '#fff',
      }
    },
  },
  plugins: [require("daisyui")],
}

