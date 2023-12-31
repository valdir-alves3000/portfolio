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
        "slide-to-left": "100s slide-to-left infinite alternate linear",
        "slide-to-right": "100s slide-to-right infinite alternate linear",
      },

    },
  },
  plugins: [],
}
export default config
