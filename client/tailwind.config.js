/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#b19e8e",
        tertiary: "#272727",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        'main-color': '#fa8e30',
        "buy-box": "rgb(97, 97, 97)",

      },
      borderColor:{
        "buy-border" : "rgb(116, 116, 116)",
        "buy-outline": '#fa8e30'
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
}

