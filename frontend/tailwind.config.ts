import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': 'var(--primary)',
                'secondary': 'var(--secondary)',
                'primaryHover': 'var(--primaryHover)',
                'secondaryHover': 'var(--secondaryHover)',
                'background': 'var(--background)',
                'fontColor': 'var(--fontColor)',
                'fontSecondary': 'var(--fontSecondary)',
                'fontColorLight': 'var(--fontColorLight)',
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
    plugins: [require('@tailwindcss/typography')],
};
export default config;
