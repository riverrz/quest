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
            gray400: "gainsboro",
            gray500: "lightgray",
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
