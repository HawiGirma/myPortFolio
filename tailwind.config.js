/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/Ellipse 2.png')",
        body: "url('/assets/body.png')",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bg2: ["#F2F4F7"],
      },
    },
  },
  plugins: [],
};
