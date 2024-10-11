import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#dc891c',
                'secondary': '#e9e4de',
                'primaryHover': '#dc891c',
                'secondaryHover': '#e9e4de',
                'background': '#f1f0ee',
                'fontColor': '#19170e',
                'fontSecondary': '#8e7657',
                'fontColorLight': '#f4f4f4',
            },
            fontFamily: {
                'serif': ['Noto Serif', 'serif'],
            },
            keyframes: {
                scrollDownAnim: {
                    '0%': {
                        opacity: '0',
                        transform: 'rotate(45deg) translate(-20px, -20px)',
                    },
                    '50%': {
                        opacity: '1',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'rotate(45deg) translate(20px, 20px)',
                    },
                },
            },
            animation: {
                scrollDownAnim: 'scrollDownAnim 2s infinite',
            },
            backgroundImage: {
                'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
            },
        }
    },
    plugins: [],
};
export default config;
