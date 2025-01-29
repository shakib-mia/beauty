/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#494566",
        secondary: "#332E54",
        white: "#FFFFFF",
        transparent: "#00000000",
        light: {
          1: "#E0E0E0",
          2: "#ECEBF9",
          3: "#F1F1E6",
        },
        dark: "#0C111F",
      },
    },
  },
  plugins: [],
};
