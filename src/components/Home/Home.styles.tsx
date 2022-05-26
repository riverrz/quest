import { styled } from "@styles/stitches.config";

export const Container = styled("div", {
    height: "100%",
    color: "$white",
});

export const Heading = styled("h1", {
    fontSize: "6vw",
    marginBottom: "2vw",
    "@sm": {
        fontSize: "40px",
        marginBottom: "20px",
    },
});
export const Hero = styled("div", {
    position: "relative",
    padding: "10vh 15vw",
    "@md": {
        padding: "50px",
    },
    "@sm": {
        padding: "20px",
    },
});

export const SubHeading = styled("h5", {
    fontSize: "1.6vw",
});
