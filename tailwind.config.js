// tailwind.config.js

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/Ellipse 2.png')",
        body: "url('/assets/body.png')",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"], // lowercase key to use like `font-sora`
        montserrat: ["Montserrat", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
      },
      colors: {
        bg2: "#F2F4F7", // ✅ fixed: use string, not array
      },
    },
  },
  plugins: [],
};
