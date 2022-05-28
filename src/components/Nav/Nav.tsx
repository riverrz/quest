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
import { useRouter } from "next/router";

const Nav: React.FC = () => {
    const router = useRouter();
    const currentDate = new Date().toLocaleDateString();
    return (
        <Container>
            <CurrentDateContainer>{currentDate}</CurrentDateContainer>
            <NavItemsContainer>
                {NAV_ITEMS.map(({ path, title }) => (
                    <Link passHref key={path} href={path}>
                        <NavItem active={path === router.pathname}>
                            {title}
                        </NavItem>
                    </Link>
                ))}
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

export const NAV_ITEMS = [
    {
        path: "/blog",
        title: "Blogs",
    },
    {
        path: "/",
        title: "Home",
    },
    {
        path: "/work",
        title: "Work",
    },
];

export default Nav;
