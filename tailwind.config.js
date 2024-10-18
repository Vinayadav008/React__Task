/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black:"#000",
        white:"#ffff",
        red:"#f90707"
      },
      backgroundImage:{
        "bg1":"url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg')"
      }
    },
  },
  plugins: [],
}