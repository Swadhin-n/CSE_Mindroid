/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins']
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2563eb",      // blue-600
          "secondary": "#fbbf24",    // yellow-400
          "accent": "#38bdf8",       // sky-400
          "neutral": "#1e293b",      // slate-800
          "base-100": "#f3f4f6",     // gray-100
          "info": "#0ea5e9",         // sky-500
          "success": "#22c55e",      // green-500
          "warning": "#f59e42",      // orange-400
          "error": "#ef4444",        // red-500
        },
      },
      "dark",
    ],
  },
}