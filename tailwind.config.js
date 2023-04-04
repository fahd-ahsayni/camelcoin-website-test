/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fbbb04",

          secondary: "#7d5c04",

          accent: "#715404",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#43a047",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        "primary-dark-light": "#1A232E",
        "white-dark": "#c7c7c7",
        "primary-dark": "#0d1117",
        "secondary-dark": "#1A232E",
        'camel': {
          100: '#FDF8EF',
          200: '#FBF2DE',
          300: '#F7E4BE',
          400: '#F4D79D',
          500: '#F0C97D',
          600: '#EAB54C',
          700: '#C48A17',
          800: '#A37313',
          900: '#825C0F',
          1000: '#62450B'
        },
        'brown': {
          50: '#FDF8EF',
          100: '#FBF2DE',
          200: '#F7E4BE',
          300: '#F4D79D',
          400: '#F0C97D',
          500: '#EAB54C',
          600: '#C48A17',
          700: '#A37313',
          800: '#825C0F',
          900: '#62450B'
        },
      },
    },
  },
  plugins: [require("daisyui"),  require('tailwind-scrollbar'), require('tailwindcss-animated')],
});
