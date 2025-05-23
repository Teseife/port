// tailwind.config.js
module.exports = {
    darkMode: 'class', // Add this line - crucial for theme control
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}