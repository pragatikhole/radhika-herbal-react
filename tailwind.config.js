/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
        primary: '#2D6A4F', // Change this to your actual brand green if different
      },
    },
  },
  plugins: [],
};
