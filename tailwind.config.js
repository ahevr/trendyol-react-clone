/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    container : {
      center: true,
      screens: {
        lg: '1300px',
        xl: '1300px',
        '2xl' : '1300px'
      }
    },
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu','sans-serif'],
        openSans: ['Open Sans','sans-serif'],
        quiksand: ['Quicksand','sans-serif'],
      }
    },
  },
  plugins: [],
}
