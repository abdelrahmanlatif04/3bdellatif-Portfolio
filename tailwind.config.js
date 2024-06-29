/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#26355D",
        "secondary-dark": "#AF47D2",
        "primary-light": "#FF8F00",
        "secondary-light": "#FFDB00",
      },
    },
  },
  plugins: [],
};
