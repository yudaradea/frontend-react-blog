/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-body": "#F1F4F5",
        "color-black": "#080C2E",
        "color-purple": "#640EF1",
        "color-text": "#5D5D7C",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Clash_Display: ["Clash_Display"],
      },
    },
    container: {
      padding: {
        DEFAULT: "20px",
        // lg: "50px",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
      center: true,
    },
  },
  plugins: [],
};
