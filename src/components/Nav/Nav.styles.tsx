import { styled } from "@styles/stitches.config";

export const Container = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
});

export const CurrentDateContainer = styled("div", {
    flexBasis: "10%",
});

export const SocialMediaContainer = styled("div", {
    flexBasis: "10%",
    justifyContent: "flex-end",
    display: "flex",
    gap: "10px",
});

export const NavItemsContainer = styled("div", {
    flex: 1,
    textAlign: "center",
});
