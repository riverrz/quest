import React, { useEffect, useRef } from "react";
import { Sphere } from "@components/common";
import { LayoutContainer, SphereContainer } from "./Layout.styles";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    getPrevAndNextPaths,
    getEnterOrExitDirections,
    getAnimationVariants,
} from "@helpers";
import { pageTransitionAnimation } from "@lib/animation";

interface LayoutProps {
    lastPath: string;
}

const Layout: React.FC<LayoutProps> = ({ children, lastPath }) => {
    const router = useRouter();
    const currentPath = router.pathname;
    const { prevPath, nextPath } = getPrevAndNextPaths(currentPath);

    const path = useRef(currentPath);
    const lastPrevPath = useRef(prevPath);
    const lastNextPath = useRef(nextPath);

    const isEntering = path.current === currentPath;

    const {
        isEnteringFromLeft,
        isEnteringFromRight,
        isExitingFromLeft,
        isExitingFromRight,
    } = getEnterOrExitDirections({
        isEntering,
        incomingPath: currentPath,
        lastPath,
        lastPrevPath: lastPrevPath.current,
        lastNextPath: lastNextPath.current,
    });

    const animationVariants = getAnimationVariants({
        isEnteringFromLeft,
        isEnteringFromRight,
        isExitingFromLeft,
        isExitingFromRight,
    });

    useEffect(() => {
        lastPrevPath.current = prevPath;
        lastNextPath.current = nextPath;
    }, [prevPath, nextPath]);

    return (
        <LayoutContainer
            initial="enter"
            animate="animate"
            exit="exit"
            variants={animationVariants}
            transition={pageTransitionAnimation.transition}
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

export default Layout;
