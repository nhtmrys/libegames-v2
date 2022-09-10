/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'gray': {
        '50': '#F9FAFB',
        '100': '#F3F4F6',
        '200': '#E5E7EB',
        '300': '#D1D5DB',
        '400': '#9CA3AF',
        '500': '#6B7280',
        '600': '#4B5563',
        '700': '#374151',
        '800': '#1F2937',
        '900': '#111827',
      },
      'black': '#000',
      'white': '#ffffff',
      'purple': '#5570D0',
      'midnight': '#001972',
      'metal': '#002CC9',
      'silver': '#E9E7E7',
      'bubble-gum': '#ff77e9',
      'bermuda': '#18369E',
      'input':'#BFCEFF',
      'contact':'#819CFF',
      'button':'#283978',
    },
    extend: {},
  },
  plugins: [],
}
