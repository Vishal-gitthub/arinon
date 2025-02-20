/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'custom-shadow': 'inset 2px 2px 4px #c4c4c4, inset -2px -2px 4px #ffffff',
            },
            backgroundColor: {
                customBackgroundColor: '#F2DFD7',
            },
            fontFamily: {
                custom: ['myCustomFont', 'sans-serif'],
            },
            width: {
                'fill-available': '-webkit-fill-available',
            },
            colors: {
                blue: {
                    custom: '#1d3962', // Add your specific blue color here
                },
                orange: {
                    custom: '#f37c20',
                },
                purple: {
                    custom: '#a62d7a',
                },
            },
        },
    },
    plugins: [],
};