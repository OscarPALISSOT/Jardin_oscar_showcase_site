import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
    plugins: [
        require('@tailwindcss/typography'),
        plugin(({ addUtilities }) => {
            addUtilities({
                '.text-shadow-light': {
                    textShadow: '0 1px 0 rgb(0 0 0 / 80%)',
                },
            })
        }),
    ],
};
export default config;
