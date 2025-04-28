/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        expense: {
          50: "#f0fbfa",
          100: "#d0f3f0",
          200: "#a2e8e4",
          300: "#68d6cf",
          400: "#38bdb7",
          500: "#1c9f9a",
          600: "#0e7f7e",
          700: "#0c6866",
          800: "#0c5352",
          900: "#0b4544",
          950: "#022b2a",
        },
        home: "#178279",
      },
    },
  },
  plugins: [],
};
