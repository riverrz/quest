import React from "react";
import { Sphere } from "@components/common";
import { LayoutContainer, SphereContainer } from "./Layout.styles";
import { useRouter } from "next/router";
import Link from "next/link";
import { useIsPresent } from "framer-motion";
import { NAV_ITEMS } from "@components/Nav/Nav";

const animation = {
    name: "Slide Right",
    variants: {
        initial: {
            left: "-90%",
        },
        animate: {
            left: 0,
        },
        exit: {
            left: "100%",
        },
    },
    transition: {
        duration: 1,
    },
};

const Layout: React.FC = ({ children }) => {
    const router = useRouter();
    const { prevPath, nextPath } = getPrevAndNextPaths(router.pathname);
    const isPresent = useIsPresent();

    console.log({ current: router.pathname, isPresent });

    return (
        <LayoutContainer
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation.variants}
            transition={animation.transition}
        >
            {prevPath && (
                <Link href={prevPath}>
                    <a>
                        <SphereContainer left>
                            <Sphere mask="left" />
                        </SphereContainer>
                    </a>
                </Link>
            )}

            {children}

            {nextPath && (
                <Link href={nextPath}>
                    <a>
                        <SphereContainer right>
                            <Sphere mask="right" />
                        </SphereContainer>
                    </a>
                </Link>
            )}
        </LayoutContainer>
    );
};

function getPrevAndNextPaths(currentPath: string): {
    prevPath: string;
    nextPath: string;
} {
    const data = {
        prevPath: "",
        nextPath: "",
    };
    const currentIndex = NAV_ITEMS.findIndex(
        ({ path }) => path === currentPath,
    );

    if (currentIndex === -1) {
        return data;
    }
    const prevPathIndex = currentIndex - 1;
    const nextPathIndex = currentIndex + 1;
    if (prevPathIndex >= 0) {
        data.prevPath = NAV_ITEMS[prevPathIndex].path;
    }
    if (nextPathIndex >= 0 && nextPathIndex < NAV_ITEMS.length) {
        data.nextPath = NAV_ITEMS[nextPathIndex].path;
    }
    return data;
}

export default Layout;
