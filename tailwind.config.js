/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': 'inset 2px 2px 4px #c4c4c4, inset -2px -2px 4px #ffffff',
      },
      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif'],
      },
      width: {
        'fill-available': '-webkit-fill-available',
      },
    },
  },
  plugins: [],
};
