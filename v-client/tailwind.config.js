/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom font family here
        inter: ['Inter', 'sans-serif',],
        dm:["DM Serif Text"],
        nunito:["Nunito"]
        // You can add more fonts if needed
      },

      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-left': 'slide-left 20s linear infinite',
      },

    },
  },
  plugins: [],
}

