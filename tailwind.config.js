/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#222626",
        secondary: "#363D3D",
        tertiary: "#324E55",
        accent: "#D5B24B",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
