import { styled } from "@styles/stitches.config";
import { Halo } from "@components/common";

const StyledSphere = styled("div", {
    height: 150,
    width: 150,
    background: "linear-gradient(to right, transparent 45%, $grey)",
    transition: "transform 0.3s",
    position: "relative",
    borderRadius: "50%",
    zIndex: 0,
    variants: {
        left: {
            true: {
                background: "linear-gradient(to right, transparent 45%, $grey)",
            },
        },
        right: {
            true: {
                background: "linear-gradient(to left, transparent 45%, $grey)",
            },
        },
    },
});

const SphereContainer = styled("div", {
    position: "relative",
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [`&:hover ${StyledSphere}`]: {
        transform: "scale(0.9)",
    },
    "&::before": {
        content: "",
        position: "absolute",
        zIndex: -1,
        inset: 0,
        borderRadius: "50%",
        padding: 5,
        "-webkit-mask-composite": "xor",
        maskComposite: "exclude",
    },
    variants: {
        left: {
            true: {
                "&::before": {
                    background:
                        "linear-gradient(to right, transparent 25%, $grey)",
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
                        "linear-gradient(to left, transparent 25%, $grey)",
                    "-webkit-mask":
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                },
            },
        },
    },
});

export const Sphere: React.FC<React.ComponentProps<typeof SphereContainer>> = (
    props,
) => {
    return (
        <SphereContainer {...props}>
            <Halo
                css={{ height: "$haloHeight", width: "$haloWidth" }}
                right
                left
                top
                bottom
            />
            <StyledSphere left={props.left} right={props.right} />
        </SphereContainer>
    );
};
