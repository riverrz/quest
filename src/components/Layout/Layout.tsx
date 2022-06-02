import React, { useMemo, useRef, useState } from "react";
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
import { useAnimation } from "framer-motion";

interface LayoutProps {
    lastPath: string;
}

const Layout: React.FC<LayoutProps> = ({ children, lastPath }) => {
    const router = useRouter();
    const leftSphereAnimationControl = useAnimation();
    const rightSphereAnimationControl = useAnimation();
    const [isAnimating, setIsAnimating] = useState(true);
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
    } = useMemo(
        () =>
            getEnterOrExitDirections({
                isEntering,
                incomingPath: currentPath,
                lastPath,
                lastPrevPath: lastPrevPath.current,
                lastNextPath: lastNextPath.current,
            }),
        [
            isEntering,
            currentPath,
            lastPath,
            lastPrevPath.current,
            lastNextPath.current,
        ],
    );

    const animationVariants = useMemo(
        () =>
            getAnimationVariants({
                isEnteringFromLeft,
                isEnteringFromRight,
                isExitingFromLeft,
                isExitingFromRight,
            }),
        [
            isEnteringFromLeft,
            isEnteringFromRight,
            isExitingFromLeft,
            isExitingFromRight,
        ],
    );

    const onPageTransitionAnimationStart = () => {
        setIsAnimating(true);
        if (isExitingFromRight) {
            leftSphereAnimationControl.start({
                rotateZ: -180,
                origin: "center",
                transition: { duration: 1 },
            });
        }
        if (isExitingFromLeft) {
            rightSphereAnimationControl.start({
                rotateZ: -180,
                origin: "center",
                transition: { duration: 1 },
            });
        }
    };

    const onPageTransitionAnimationComplete = () => {
        console.log(path.current, "Page transition ended");
        setIsAnimating(false);
    };

    let isPrevSphereVisible = !!lastPrevPath.current;
    let isNextSphereVisible = !!lastNextPath.current;

    if (isEnteringFromLeft && isNextSphereVisible) {
        isNextSphereVisible = !isAnimating;
    }

    if (isEnteringFromRight && isPrevSphereVisible) {
        isPrevSphereVisible = !isAnimating;
    }

    return (
        <LayoutContainer
            initial="enter"
            animate="animate"
            exit="exit"
            onAnimationStart={onPageTransitionAnimationStart}
            onAnimationComplete={onPageTransitionAnimationComplete}
            variants={animationVariants}
            transition={pageTransitionAnimation.transition}
        >
            {isPrevSphereVisible && (
                <Link href={prevPath}>
                    <a>
                        <SphereContainer
                            left
                            animate={leftSphereAnimationControl}
                        >
                            <Sphere mask="left" />
                        </SphereContainer>
                    </a>
                </Link>
            )}

            {children}

            {isNextSphereVisible && (
                <Link href={nextPath}>
                    <a>
                        <SphereContainer
                            right
                            animate={rightSphereAnimationControl}
                        >
                            <Sphere mask="right" />
                        </SphereContainer>
                    </a>
                </Link>
            )}
        </LayoutContainer>
    );
};

export default Layout;
