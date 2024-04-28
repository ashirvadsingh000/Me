/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ['"Poppins"', '"sans-serif"'],
      Dancing: ['"Dancing Script"', '"cursive"'],
      Berkshire: ['"Berkshire Swash"', '"serif"'],
      whisper: ['"Whisper"', '"cursive"'],
      anta: ['"Anta"', '"sans-serif"'],
    },

   
    extend: {},

  },
  plugins: [require("tailwindcss-textshadow"), require("tailwind-scrollbar")],
};
