import { globalCss } from "@styles/stitches.config";

export const globalStyles = globalCss({
    "*, *::after, *::before": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        cursor: "none !important",
    },
    html: {
        minHeight: "100vh",
    },
    body: {
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "Sofia Pro, sans-serif",
        backgroundColor: "$darkPrimary",
        color: "$white",
    },
    "#__next": {
        height: "100%",
        width: "100%",
    },
});
