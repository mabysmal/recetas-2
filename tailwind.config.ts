import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracota: "#C84B31",
        olivo: "#7D8471",
        crema: "#ECDBBA",
        negro: "191919",
      },
      fontFamily: {
        'spicy': ['var(--font-spicy)', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
        'source': ['var(--font-source)', 'serif'],
        'open': ['var(--font-open)', 'sans-serif'],

      },
    },
  },
  plugins: [],
} satisfies Config;
