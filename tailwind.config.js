/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C3333",
        secondary: "#395B64",
        ternary: "#A5C9CA",
        accent: "#E7F6F2",
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
