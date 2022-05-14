import { globalCss } from "@config/stitches.config";

export const globalStyles = globalCss({
    "*, *::after, *::before": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },
    html: {
        height: "100%",
    },
    body: {
        height: "100%",
        width: "100%",
        fontFamily: "Sofia Pro, sans-serif",
    },
    "#__next": {
        height: "100%",
        width: "100%",
    },
});
