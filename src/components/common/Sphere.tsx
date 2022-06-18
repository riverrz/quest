import { styled } from "@styles/stitches.config";
import { m } from "framer-motion";
import { Halo } from "@components/common";

const StyledSphere = styled(m.div, {
    height: 150,
    width: 150,
    background: "linear-gradient(to right, transparent 45%, $white)",
    transition: "transform 0.3s",
    position: "relative",
    borderRadius: "50%",
    zIndex: 0,
    variants: {
        left: {
            true: {
                background:
                    "linear-gradient(to right, transparent 45%, $white)",
            },
        },
        right: {
            true: {
                background: "linear-gradient(to left, transparent 45%, $white)",
            },
        },
    },
});

const SphereContainer = styled("div", {
    position: "relative",
    padding: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [`&:hover ${StyledSphere}`]: {
        transform: "scale(0.9)",
    },
    boxShadow: "0px 0px 50px rgb(255 255 255 / 40%)",
    borderRadius: "50%",
    "&::before": {
        content: "",
        position: "absolute",
        zIndex: -1,
        inset: 0,
        borderRadius: "50%",
        padding: 8,
        "-webkit-mask-composite": "xor",
        maskComposite: "exclude",
    },
    variants: {
        left: {
            true: {
                "&::before": {
                    background:
                        "linear-gradient(to right, transparent 25%, $white)",
                    "-webkit-mask":
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                },
            },
        },
        right: {
            true: {
                "&::before": {
                    background:
                        "linear-gradient(to left, transparent 25%, $white)",
                    "-webkit-mask":
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                },
            },
        },
    },
});

export const Sphere: React.FC<React.ComponentProps<typeof StyledSphere>> = (
    props,
) => {
    return (
        <SphereContainer left={props.left} right={props.right}>
            <Halo
                css={{ height: "$haloHeight", width: "$haloWidth" }}
                right
                left
                top
                bottom
            />
            <StyledSphere {...props} />
        </SphereContainer>
    );
};
