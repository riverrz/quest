import React from "react";
import { styled } from "@styles/stitches.config";
import { NavItem } from "@components/common";

const Nav: React.FC = () => {
    const currentDate = new Date().toLocaleDateString();
    return (
        <Container>
            <div>{currentDate}</div>
            <NavItemContainer>
                <NavItem>Tutorials</NavItem>
                <NavItem active>Hello</NavItem>
                <NavItem>Work</NavItem>
            </NavItemContainer>
            <div>Social media icons</div>
        </Container>
    );
};
const Container = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 2rem 0",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
});

const NavItemContainer = styled("div", {
    display: "flex",
    gap: "1rem",
});

export default Nav;
