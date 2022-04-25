module.exports = {
    content: [`./index.html`, `./ *.js`, `./*.css`],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                Poppins: [`Poppins`],
            },
            colors: {
                contentBg: `#f6f5fa`,
                textColor: `#181059`,
            },
        },
    },
    plugins: [],
};