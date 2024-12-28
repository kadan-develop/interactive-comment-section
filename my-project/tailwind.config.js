/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lily: { default: "#C5C6EF" },
        pale: { red: "#FFB8BB" },
      },
    },
  },
  plugins: [],
};
