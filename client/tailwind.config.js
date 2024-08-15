/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DFCE9A",
        secondary: "#2A5C7E",
        primaryDark: "#B09F6B",
        darkBg: "#1D232A",
        greenTheme: "#5fa503"
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: "class",
}