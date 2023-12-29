import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "404": "url('/assets/img/p404.png')"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-to-left": {
          from: {
            transform: "translateX(5%)",
          },
          to: {
            transform: "translateX(-70%)",
          },
        },
        "slide-to-right": {
          from: {
            transform: "translateX(-70%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-to-left": "100s slide-to-left infinite alternate linear",
        "slide-to-right": "100s slide-to-right infinite alternate linear",
      },

    },
  },
  plugins: [],
}
export default config
