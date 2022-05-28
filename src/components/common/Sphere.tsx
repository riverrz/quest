import { styled } from "@styles/stitches.config";
import { Halo } from "@components/common";

const StyledSphere = styled("div", {
    height: 150,
    width: 150,
    backgroundColor: "$grey",
    borderRadius: "50%",
    transition: "transform 0.3s",
});

const SphereContainer = styled("div", {
    position: "relative",
    padding: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "10px solid $grey",
    borderRadius: "50%",
    [`&:hover ${StyledSphere}`]: {
        transform: "scale(1.1)",
    },
    "&::after": {
        content: "",
        position: "absolute",
        zIndex: 1,
        backgroundColor: "#000",
    },
    variants: {
        mask: {
            left: {
                "&:after": {
                    top: -10,
                    width: "calc(50% + 10px)",
                    left: -10,
                    bottom: -10,
                },
            },
            right: {
                "&:after": {
                    top: -10,
                    width: "calc(50% + 10px)",
                    right: -10,
                    bottom: -10,
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
            <Halo css={{ height: 350, width: 350 }} right left top bottom />
            <StyledSphere />
        </SphereContainer>
    );
};
