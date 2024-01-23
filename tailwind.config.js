/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "background-image": "url('/src/assets/images/background.jpg')",
        "background-image2": "url('/src/assets/images/background.jpg')",
      }),
    },
  },
  plugins: [],
};
