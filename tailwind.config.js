module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        mgkbg: "#020205",
        mgkpanel: "#0b0b10",
        mgkneon: "#ff2fa8",
        mgkneon2: "#9b5cff"
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] }
    }
  },
  plugins: []
}
