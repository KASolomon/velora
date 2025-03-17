/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Black
        secondary: "#B8860B", // Dark Brownish Gold
        backgroundLight: "#F5F5F5", // Warm Gray
        backgroundDark: "#1C1C1C", // Deep Gray
        textLight: "#EAEAEA", // Light Gray
      },
    },
  },
  darkMode: "selector", 
  plugins: [],
};
