module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-barlow-semi-condensed)', 'sans-serif'],
      },
      colors: {
        neutral: {
          normal: '#1F2023',
          accent: '#D2D2D2',
          subdued: '#383A42',
          'invert-accent': '#1F1F1F',
        },
        primary: {
          normal: '#FFC700',
        },
        ink: '#131415',
        paper: '#ffffff',
        'paper-60': '#ffffff99',
      },
    },
  },
  plugins: [],
};
