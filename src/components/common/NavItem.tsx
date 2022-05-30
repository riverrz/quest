import React from "react";
import { styled } from "@styles/stitches.config";
import { motion } from "framer-motion";

const StyledNavItem = styled("a", {
    textDecoration: "none",
    color: "$grey",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "inherit",
    padding: "0.8rem",
    border: "none",
    position: "relative",
    fontWeight: "bold",
});

const StyledUnderline = styled(motion.div, {
    position: "absolute",
    bottom: -1,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "$orange",
});

interface NavItemProps extends React.ComponentProps<typeof StyledNavItem> {
    active?: boolean;
}

export const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
    ({ children, active, ...rest }, ref) => {
        return (
            <StyledNavItem ref={ref} {...rest}>
                {children}
                {active ? <StyledUnderline layoutId="underline" /> : null}
            </StyledNavItem>
        );
    },
);
