/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-banner': "url('../assets/banner.png')",
      },
    },
  },
  plugins: [],
};
