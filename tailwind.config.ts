/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        Blue: "hsl(246, 80%, 60%)",
        Work: "hsl(15, 100%, 70%)",
        Play: "hsl(195, 74%, 62%)",
        Study: "hsl(348, 100%, 68%)",
        Exercise: "hsl(145, 58%, 55%)",
        Social: "hsl(264, 64%, 52%)",
        SelfCare: "hsl(43, 84%, 65%)",
        VeryDarkBlue: "hsl(226, 43%, 10%)",
        DarkBlue: "hsl(235, 46%, 20%)",
        DesaturatedBlue: "hsl(235, 45%, 61%)",
        PaleBlue: "hsl(236, 100%, 87%)"
      }
    }
  },
  plugins: []
};
export default config;
