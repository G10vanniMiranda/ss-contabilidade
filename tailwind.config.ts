import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brandGray: {
          900: "#1C1C1C", // fundo profundo
          800: "#2A2A2A", // cinza principal da marca
          700: "#3A3A3A", // contraste leve
          600: "#4A4A4A", // bordas e detalhes
        },
        metallic: {
          silver: "#C0C0C0",
          light: "#D9D9D9",
        },
      },
      backgroundImage: {
        "metal-gradient":
          "linear-gradient(145deg, #1C1C1C 0%, #2A2A2A 50%, #1C1C1C 100%)",
        "dark-metal": "linear-gradient(to bottom right, #2A2A2A, #1A1A1A)",
      },
      boxShadow: {
        glass: "0 0 20px rgba(255,255,255,0.05)",
        glow: "0 0 25px rgba(255,255,255,0.15)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseSoft: "pulseSoft 3s ease-in-out infinite",
        "fade-in": "fade-in 200ms ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
