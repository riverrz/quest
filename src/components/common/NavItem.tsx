import { styled } from "@styles/stitches.config";

export const NavItem = styled("a", {
    textDecoration: "none",
    color: "$grey",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "1rem",
    padding: "0.8rem",
    border: "none",
    fontWeight: "bold",
    variants: {
        active: {
            true: {
                color: "$orange",
                borderBottom: "1px solid $orange",
            },
        },
    },
});
