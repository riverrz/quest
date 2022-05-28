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
});

export const Sphere: React.FC = () => {
    return (
        <SphereContainer>
            <Halo css={{ height: 350, width: 350 }} right left top bottom />
            <StyledSphere />
        </SphereContainer>
    );
};
