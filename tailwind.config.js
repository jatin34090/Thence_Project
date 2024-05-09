/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        custom: ["Bilbo Swash Caps", "cursive"], 
      },
      colors: {
        customGray: 'rgba(239, 239, 239, 1)',
      },
      backgroundImage: {
        'gradient1': 'linear-gradient(97.55deg, #1C1C1C 2.63%, #454444 105.2%)',
        'gradient2': 'linear-gradient(0deg, #C9C9C9, #C9C9C9)',
      },
    },
  },
  plugins: [],
}

