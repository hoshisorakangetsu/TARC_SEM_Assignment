/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC000",
        textBase: "#1C1C1C",
      },
    },
  },
  plugins: [],
};
