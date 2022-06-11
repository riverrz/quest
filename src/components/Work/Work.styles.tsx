import { styled } from "@styles/stitches.config";

export const Container = styled("div", {
    padding: "$pagePadding",
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    "& > *": {
        flex: 1,
    },
    height: "100%",
});

export const Heading = styled("h1", {
    fontSize: "4rem",
});

export const SubHeadingContainer = styled("div", {
    display: "flex",
    gap: "2rem",
    marginTop: "2rem",
});

export const SubHeading = styled("h5", {
    fontSize: 18,
    color: "$grey",
});

export const WorkTilesContainer = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gridAutoRows: "1fr",
    borderRight: "1px solid $grey",
    borderLeft: "1px solid $grey",
});
