import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            'primary': '#dc891c',
            'secondary': '#e9e4de',
            'primaryHover': '#dc891c',
            'secondaryHover': '#e9e4de',
            'background': '#f1f0ee',
            'fontColor': '#19170e',
            'fontSecondary': '#8e7657',
            'fontColorLight': '#f4f4f4',
        }
    },
    plugins: [],
};
export default config;
