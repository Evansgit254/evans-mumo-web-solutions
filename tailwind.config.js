/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: '#1B3B6F',
                secondary: '#FF7A00',
                light: '#F5F5F5',
                white: '#FFFFFF',
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
