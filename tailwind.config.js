/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "0.5rem",
        sm: "1.5rem",
        lg: "11rem",
        '2xl': "13rem",
      },
    },
    extend: {
      shadows: {
        Shadow:
          "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;", //Red shadow (for testing puposes)
      },
      colors: {
        "custom-yelow": "#ffed00",
        "custom-blue": "#009AE9",
        "main-color": "#003d78",
        whiteTo: "#F6F6F6",
        blueFrom: "#c5dbf7",
      },
    },
  },
  plugins: [],
};
