import { styled } from "@styles/stitches.config";

export const Container = styled("div", {
    height: "100%",
    color: "$white",
});

export const Heading = styled("h1", {
    fontSize: "8vw",
    marginBottom: "2vw",
    "@sm": {
        fontSize: "40px",
        marginBottom: "20px",
    },
});

export const TopSection = styled("div", {
    height: "20%",
});

export const Hero = styled("div", {
    position: "relative",
    padding: "10vh 12vw",
    "@md": {
        padding: "50px",
    },
    "@sm": {
        padding: "20px",
    },
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

export const SubHeadingContainer = styled("div", {
    display: "flex",
    gap: "2rem",
});

export const SubHeading = styled("h5", {
    fontSize: 24,
    fontWeight: "normal",
});
export const Description = styled("p", {
    fontSize: 14,
    marginTop: 15,
    lineHeight: 2.2,
    color: "$grey",
});

export const Spacer = styled("div", {
    borderTop: "6px solid $white",
    height: "100%",
    width: 30,
    marginTop: 6,
});
