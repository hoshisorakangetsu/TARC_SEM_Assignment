/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryText: "#FFC000",
        primaryBg: "#F9B000",
        textBase: "#1C1C1C",
      },
    },
  },
  plugins: [],
};
