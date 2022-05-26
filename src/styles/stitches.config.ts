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
            grey: "rgb(255,255,255, 0.8)",
            orange: "#FFAA33",
        },
    },
    media: {
        sm: "(min-width: 480px)",
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
