/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4267B2', 
        secondary: '#ffffff',
        custom: "#898F9C",
      },
    },
  },
  plugins: [],
}
