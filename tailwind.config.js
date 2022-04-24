module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "salafi-white": "#FBFAFF",
        "salafi-grey-white": "#F7FAFE",
        "salafi-blue": "#7721FF",
        "salafi-blue-light": "#8D70FE",
      },
      colors: {
        "salafi-heading": "#2E2E2E",
        "salafi-body": "#808080",
        "salafi-black": "#000000",
        "salafi-grey-white": "#E9E9E9",
        "salafi-primary-btn": "#8D70FE",
      },
      fontFamily: {
        sans: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
