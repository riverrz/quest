import { styled } from "@styles/stitches.config";

export const LayoutContainer = styled("div", {
    position: "relative",
    width: "100%",
    height: "100%",
});

export const SphereContainer = styled("div", {
    position: "absolute",
    top: "50%",
    variants: {
        left: {
            true: {
                left: 0,
                transform: "translate(-50%, -50%)",
            },
        },
        right: {
            true: {
                right: 0,
                transform: "translate(50%, -50%)",
            },
        },
    },
});
