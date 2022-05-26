import React from "react";
import Link from "next/link";
import { socialMediaHandles } from "@constants/socialMedia";
import {
    Container,
    CurrentDateContainer,
    NavItemsContainer,
    SocialMediaContainer,
} from "./Nav.styles";
import { NavItem } from "@components/common";

const Nav: React.FC = () => {
    const currentDate = new Date().toLocaleDateString();
    return (
        <Container>
            <CurrentDateContainer>{currentDate}</CurrentDateContainer>
            <NavItemsContainer>
                <NavItem>Tutorials</NavItem>
                <NavItem active>Hello</NavItem>
                <NavItem>Work</NavItem>
            </NavItemsContainer>
            <SocialMediaContainer>
                {socialMediaHandles.map(({ socialMedia, Icon, link }) => (
                    <Link href={link} key={socialMedia}>
                        <a target="_blank">
                            <Icon color="#fff" fontSize="inherit" />
                        </a>
                    </Link>
                ))}
            </SocialMediaContainer>
        </Container>
    );
};

export default Nav;
