/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#347324',   // Deep Forest Green
        secondary: '#E6D5B8', // Warm Sand
        tertiary: '#C87A5A',  // Soft Clay
        dark: '#2C2A29',      // Charcoal
        light: '#FDFBF7',     // Off-white background
        muted: '#7A6E65',     // Warm Gray
      },
    },
  },
  plugins: [],
}