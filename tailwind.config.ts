/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Incluye todas las rutas necesarias
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"], // Incluye un fallback
      },
      colors: {
        primary: '#94d1d8',
        secondary: '#41b9c6',
      },
    },
  },
  plugins: [],
};
