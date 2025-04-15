// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "darkPurple": "#211858", 
        softPurple: "#5C5393",
        darkBlue: "#051A38",
        softBlue: "#4C678C",
        softPink: "#704C8F",
      },
    },
  },
  plugins: [],
};
