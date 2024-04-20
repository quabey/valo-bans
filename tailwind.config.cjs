/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        valo: "#FF2A4B",
      },
    },
  },

  plugins: [],
};

module.exports = config;
