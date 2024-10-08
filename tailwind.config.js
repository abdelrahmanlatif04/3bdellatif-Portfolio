/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#222831",
        "secondary-dark": "#31363F",
        "primary-light": "#fff",
        "secondary-light": "#76ABAE",
      },
    },
  },
  plugins: [],
};
