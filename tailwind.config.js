/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#24292e',
        secondary: '#2b3137',
        tertiary: '#8590a0',
        accent: '#E48F45',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
      },
      fontFamily: {
        roboto: ['roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
