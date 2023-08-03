/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            maxWidth: {
                '1/2': '50%',
              },
            colors: {
                primary: "#00ADB5",
                grey: {
                    100: "#EEEEEE",
                    150: "#D4D4D8",
                    200: "#7a797a",
                    300: "#424244",
                    400: "#2e2e30",
                    500: "#1e1f21",
                },
                decline: "#c70000",
                accept: "#028f00"
            },
        },
    },
    plugins: [],
};

