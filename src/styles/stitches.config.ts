import { createStitches } from "@stitches/react";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            darkPrimary: "#000",
            white: "rgb(255,255,255)",
            grey: "rgb(255,255,255, 0.7)",
            orange: "#FFAA33",
            pink: "#fc0380",
            blue: "#9fbaf9",
            indigo: "#7274f3",
            gradient:
                "linear-gradient(91.83deg, $pink -20.26%, $blue 20.55%, $indigo 60.81%)",
        },
        sizes: {
            haloHeight: "350px",
            haloWidth: "350px",
        },
        space: {
            pagePadding: "10vh 5vw 0 15vw",
        },
    },
    media: {
        sm: "(max-width: 480px)",
        md: "(max-width: 720px)",
    },
    utils: {
        marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
        marginY: (value: number) => ({ marginTop: value, marginBottom: value }),
        paddingX: (value: number) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        paddingY: (value: number) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        vWidth: (value: number) => ({ width: `${value}vw` }),
        vHeight: (value: number) => ({ width: `${value}vh` }),
    },
});
