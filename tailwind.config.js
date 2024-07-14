/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx,css,ts,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        BgPrimary: "#181A31",
      },
    },
  },
  plugins: [],
}
