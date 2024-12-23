/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "350px",
      lg: "420px",
    },
    extend: {
      fontFamily: {
        iransans: ["IranSans", "sans-serif"],
        iransansBold: ["IranSansBold", "sans-serif"],
        iransansNum: ["IranSansNum", "sans-serif"],
        lobsterBold: ["LobsterBold", "sans-serif"],
      },
      colors: {
        primaryColor: "#E4AC25",
        secondaryColor: " #1B3544",
      },
    },
  },
  plugins: [],
};
