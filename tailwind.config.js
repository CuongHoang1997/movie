/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#f80b46",
        secondary: "#FFFF00	",
        third: "#6A5ACD	",
      },
    },
  },
  plugins: [],
};
