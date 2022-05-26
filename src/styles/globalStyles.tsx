import { globalCss } from "@styles/stitches.config";

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
        backgroundColor: "$darkPrimary",
        color: "$white",
    },
    "#__next": {
        height: "100%",
        width: "100%",
    },
});
