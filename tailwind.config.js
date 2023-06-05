/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#3b82f6",
        secondaryColor: "#dbeafe",
        primaryBg: "",
        textColor: "#000000",
      }
    },
  },
  plugins: [],
}

