/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          DEFAULT: "#B8860B", // Brownish gold
          light: "#D4AF37", // Lighter gold
          dark: "#996515", // Darker gold
          foreground: "#FFFFFF", // White
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "gold-sm": "0 1px 2px 0 rgba(184, 134, 11, 0.05)",
        "gold-md":
          "0 4px 6px -1px rgba(184, 134, 11, 0.1), 0 2px 4px -1px rgba(184, 134, 11, 0.06)",
        "gold-lg":
          "0 10px 15px -3px rgba(184, 134, 11, 0.1), 0 4px 6px -2px rgba(184, 134, 11, 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "#0f172a",
            a: {
              color: "#B8860B",
              "&:hover": {
                color: "#996515",
              },
            },
            strong: {
              color: "#0f172a",
            },
          },
        },
        dark: {
          css: {
            color: "#f8fafc",
            a: {
              color: "#D4AF37",
              "&:hover": {
                color: "#B8860B",
              },
            },
            strong: {
              color: "#f8fafc",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
