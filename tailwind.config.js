/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "15%": { transform: "rotate(14.0deg)" },
          "30%": { transform: "rotate(-8.0deg)" },
          "40%": { transform: "rotate(14.0deg)" },
          "50%": { transform: "rotate(-4.0deg)" },
          "60%": { transform: "rotate(10.0deg)" },
          "70%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        elasticus: {
          "0%": {
            "transform-origin": "0% 0%",
            transform: "scale(1, 0)",
          },
          "50%": {
            "transform-origin": "0% 0%",
            transform: "scale(1, 1)",
          },
          "50.1%": {
            "transform-origin": "0% 100%",
            transform: "scale(1, 1)",
          },
          "100%": {
            "transform-origin": "0% 100%",
            transform: "scale(1, 0)",
          },
        },
      },
      animation: {
        text: "text 5s ease infinite",
        handWave: "wave 1.5s infinite",
        elasticus: "elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite",
      },
      fontFamily: {
        space: ["var(--font-space)"],
        deca: ["var(--font-deca)"],
        app: ["var(--font-app)"],
        out: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};