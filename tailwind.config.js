/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        foundersGrotesk: ["'Founders Grotesk X-Cond SmBd'", 'sans-serif'], // Define the font family
      }
    },
  },
  plugins: [],
}

