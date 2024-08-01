/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#2D9513",
        secondary: "#8BC34A",
        textPrimary: "$193F10",
      },
    },
  },
  plugins: [],
};
