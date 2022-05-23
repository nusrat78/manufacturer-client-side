module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        Engineertheme: {
          primary: "#1e3a8a",
          secondary: "#0369a1",
          accent: "#2563eb",
          neutral: "#3d4451",
          "base-100": "#ffffff",

        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}

