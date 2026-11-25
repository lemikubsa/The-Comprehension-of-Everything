/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: {
          300: "#f3d9a4",
          400: "#e5c07b",
          500: "#d19a66",
          600: "#b37d4a",
          700: "#8a5c30",
        },
        obsidian: {
          800: "#161b26",
          900: "#0f131c",
          950: "#090c12",
        },
        // Theme-aware colors driven by CSS variables (see src/index.css).
        // Gives you: text-theme-primary, text-theme-secondary, text-theme-gold,
        // text-theme-gold-bright and border-theme.
        theme: {
          DEFAULT: "var(--border-subtle)",
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          gold: "var(--accent-gold)",
          "gold-bright": "var(--accent-gold-bright)",
        },
      },
      fontFamily: {
        display: ["Cinzel", "Georgia", "serif"],
        serif: ["Lora", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        "fade-slide-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-slide-in": "fade-slide-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
