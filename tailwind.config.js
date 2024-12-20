/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff6741",
          dark: "rgba(129, 107, 85, 0.4)",
        },
        secondary: "#b3b1ae",
        'dark-brown': '#54280C',
        'accent': '#FFC300'
        
      },
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
