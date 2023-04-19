/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                background: "#1f2937",
                foreground: "#f9faf8",
                "alt-text": "#e5e7eb",
                primary: "#3882f6",
            },
            fontFamily: {
                odin: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
