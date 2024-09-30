/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'dancingscript':["Dancing Script", 'cursive'],
        'updock':["Updock", 'cursive'],
        'pacifico':["Pacifico", 'cursive'],
      }
    },
  },
  plugins: [],
}