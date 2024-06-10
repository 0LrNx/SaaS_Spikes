/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary: "rgba(11, 8, 28, 0.5)",
      },
      backgroundImage: {
        // 'hero-bg': "url('./assets/bg_stack.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}