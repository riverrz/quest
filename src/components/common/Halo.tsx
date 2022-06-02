import { styled } from "@styles/stitches.config";

export const Halo = styled("div", {
    height: 600,
    width: 600,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "transparent",
    borderRadius: "50%",
    variants: {
        left: {
            true: {
                borderLeft: "1px solid rgba(255, 255,255, 0.3)",
            },
        },
        right: {
            true: {
                borderRight: "1px solid rgba(255, 255,255, 0.3)",
            },
        },
        top: {
            true: {
                borderTop: "1px solid rgba(255, 255,255, 0.3)",
            },
        },
        bottom: {
            true: {
                borderBottom: "1px solid rgba(255, 255,255, 0.3)",
            },
        },
    },
});
