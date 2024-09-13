/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#012970',
        'custom-orange': '#F5269F',
        'custom-purple': '#B50EDF',
        'custom-red': '#EC434B',
        'custom-yellow': '#F79F23',
        'custom-green': '#21C2F0',
        'custom-light-blue': '#5C9EAD',
        'custom-black': '#24272A',
        'custom-indigo': '#FBF0F1',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        'zoom-in-up': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5) translateY(50%)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
      },
      animation: {
        'zoom-in-up': 'zoom-in-up 0.5s ease-out',
      },
    },
  },

  plugins: [],
}
