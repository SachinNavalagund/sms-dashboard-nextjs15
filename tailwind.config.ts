import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pinkD: '#f9a8d4',
        pinkL: '#fbcfe8',
        purpleL: '#e9d5ff',
        purpleD: '#d8b4fe',
        skyL: '#e1f8ff',
        skyD: '#C6E7FF',
      },
    },
  },
  plugins: [],
} satisfies Config;
