import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: "#E8600A",
          light: "#FF8C3A",
          dark: "#C44E00",
        },
        // Gates Foundation-inspired: deep navy authority color
        navy: {
          DEFAULT: "#1B3A6B",
          light: "#2D5FA8",
          dark: "#0D2447",
          muted: "#E8EDF5",
          faint: "#F4F6FB",
        },
        cream: {
          DEFAULT: "#FDFAF5",
          warm: "#F5EDE0",
          muted: "#EDE0C8",
        },
        void: {
          DEFAULT: "#0F0C08",
          soft: "#1C1712",
        },
        stone: {
          editorial: "#3D3630",
          muted: "#7A6E65",
          light: "#B5A89A",
        },
        charcoal: "#2A2320",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem,6vw,5.5rem)",    { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xl":  ["clamp(2.25rem,4.5vw,4rem)", { lineHeight: "1.1",  letterSpacing: "-0.015em" }],
        "display-lg":  ["clamp(1.875rem,3.5vw,3rem)",{ lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-md":  ["clamp(1.5rem,2.5vw,2.25rem)",{ lineHeight: "1.2" }],
        "display-sm":  ["clamp(1.25rem,2vw,1.75rem)", { lineHeight: "1.25" }],
      },
      spacing: {
        section:    "7rem",
        "section-sm": "4.5rem",
        "section-lg": "10rem",
      },
      transitionTimingFunction: {
        smooth:     "cubic-bezier(0.16, 1, 0.3, 1)",
        spring:     "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        decelerate: "cubic-bezier(0.0, 0.0, 0.2, 1)",
        cinematic:  "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        card:       "0 1px 2px rgba(15,12,8,0.04), 0 4px 16px rgba(15,12,8,0.06)",
        "card-hover": "0 4px 8px rgba(15,12,8,0.06), 0 16px 48px rgba(15,12,8,0.10)",
        bezel:      "inset 0 1px 1px rgba(255,255,255,0.85), 0 1px 2px rgba(15,12,8,0.08)",
        "navy-glow":"0 8px 32px rgba(27,58,107,0.18)",
        "lift":     "0 2px 4px rgba(15,12,8,0.04), 0 8px 24px rgba(15,12,8,0.08)",
      },
      backgroundImage: {
        "saffron-gradient": "linear-gradient(135deg, #E8600A 0%, #FF8C3A 100%)",
        "navy-gradient":    "linear-gradient(135deg, #0D2447 0%, #1B3A6B 100%)",
        "dark-gradient":    "linear-gradient(180deg, rgba(15,12,8,0) 0%, rgba(15,12,8,0.85) 100%)",
        "hero-fade":        "linear-gradient(to right, rgba(15,12,8,0.72) 0%, rgba(15,12,8,0.18) 60%, transparent 100%)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        revealMask: {
          from: { opacity: "0", transform: "translateY(16px)", filter: "blur(4px)" },
          to:   { opacity: "1", transform: "translateY(0)",    filter: "blur(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(24px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.97)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% center" },
          to:   { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        "fade-up":       "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in":       "fadeIn 0.5s cubic-bezier(0.16,1,0.3,1) both",
        "reveal":        "revealMask 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "slide-in-right":"slideInRight 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "scale-in":      "scaleIn 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
