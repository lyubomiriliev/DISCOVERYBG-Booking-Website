/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
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
        secondaryOpacity20: "rgba(139,195,74, 0.2)",
        darkGreen: "#193F10",
        textPrimary: "$193F10",
      },
    },
  },
  plugins: [],
};
