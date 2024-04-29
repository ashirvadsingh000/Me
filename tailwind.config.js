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
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
   
    extend: {},

  },
  plugins: [require("tailwindcss-textshadow"), require("tailwind-scrollbar")],
};
