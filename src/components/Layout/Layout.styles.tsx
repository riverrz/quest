import { m } from "framer-motion";
import { styled } from "@styles/stitches.config";

export const LayoutContainer = styled(m.div, {
    position: "absolute",
    height: "100%",
    width: "100vw",
});

export const SphereContainer = styled(m.div, {
    position: "absolute",
    top: 350,
    zIndex: 2,
    variants: {
        left: {
            true: {
                left: -100,
            },
        },
        right: {
            true: {
                right: -100,
            },
        },
    },
});
