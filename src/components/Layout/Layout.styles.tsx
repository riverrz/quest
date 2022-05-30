import { m } from "framer-motion";
import { styled } from "@styles/stitches.config";

export const LayoutContainer = styled(m.div, {
    position: "absolute",
    height: "100%",
    width: "100vw",
});

export const SphereContainer = styled("div", {
    position: "absolute",
    top: "50%",
    zIndex: 2,
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
