// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import lineClamp from "@tailwindcss/line-clamp";

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
        lora: ["Lora", "serif"],
        mulish: ["Mulish", "sans-serif"],
        opensans: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        olive: "#7E9E86",
        "olive-dark": "#5F7C66",
        light: "#FEFEFE",
        "custom-pink": "#FFC7FD",
        "light-green": "#E3F2E1",

      },
    },
  },
  plugins: [lineClamp],
};
